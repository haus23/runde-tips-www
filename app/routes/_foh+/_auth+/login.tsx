import { useForm } from '@conform-to/react';
import { parse, refine } from '@conform-to/zod';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { z } from 'zod';

import { type DataFunctionArgs, json, redirect } from '@remix-run/node';
import { render } from 'jsx-email';
import { promiseHash } from 'remix-utils/promise';
import { Button } from '#app/components/(ui)/button';
import { getUserByEmail } from '#app/modules/api/foh/users';
import type { User } from '#app/modules/api/model/user';
import {
	commitSession,
	getSession,
} from '#app/modules/auth/auth-session.server';
import { isKnownEmail, requireAnonymous } from '#app/modules/auth/auth.server';
import { sendEmail } from '#app/utils/email.server';
import { invariant } from '#app/utils/invariant';
import { generateLoginCode } from '#app/utils/totp.server';
import { Template, type TemplateProps } from '#emails/send-totp';

function createFormSchema(constraint?: {
	isKnownEmail?: (email: string) => Promise<boolean>;
}) {
	return z.object({
		email: z
			.string({ required_error: 'Email-Adresse ist notwendig.' })
			.email('Ungültige Email-Adresse.')
			.pipe(
				z.string().superRefine((email, ctx) =>
					refine(ctx, {
						validate: () => constraint?.isKnownEmail?.(email),
						message: 'Unbekannte Email-Adresse.',
					}),
				),
			),
	});
}

export async function loader({ request }: DataFunctionArgs) {
	await requireAnonymous(request);

	const session = await getSession(request.headers.get('Cookie'));
	return json({ email: session.get('auth:email') });
}

export async function action({ request }: DataFunctionArgs) {
	const formData = await request.formData();

	const submission = await parse(formData, {
		schema: createFormSchema({ isKnownEmail }),
		async: true,
	});

	if (submission.intent !== 'submit' || !submission.value) {
		return json(submission);
	}

	const user = await getUserByEmail(submission.value.email);
	invariant(user !== null);

	const { code, secret } = generateLoginCode();
	const emailContent = await renderSendTotpMail({ username: user.name, code });

	const smtpResult = await sendEmail({
		to: `${user.name} <${user.email}>`,
		subject: 'Tipprunde Login Code',
		...emailContent,
	});

	if (smtpResult.status === 'error') {
		throw new Error('Probleme beim Email-Versand.');
	}

	const session = await getSession(request.headers.get('Cookie'));
	session.flash('auth:email', submission.value.email);
	session.flash('auth:secret', secret);

	return redirect('/onboarding', {
		headers: {
			'Set-Cookie': await commitSession(session),
		},
	});
}

export default function LoginRoute() {
	const { email } = useLoaderData<typeof loader>();
	const lastSubmission = useActionData<typeof action>();

	const [form, fields] = useForm({
		lastSubmission,
		onValidate({ formData }) {
			return parse(formData, { schema: createFormSchema() });
		},
		defaultValue: { email },
	});

	return (
		<div className="max-w-sm mx-auto mt-12 border rounded-lg p-4 shadow">
			<header className="border-b pb-2">
				<h2 className="text-xl font-semibold">Anmeldung</h2>
			</header>
			<Form method="post" className="mt-6" {...form.props}>
				<div className="relative pb-6">
					<label htmlFor="email" className="block text-sm font-medium">
						Email
					</label>
					<input
						defaultValue={fields.email.defaultValue}
						type="text"
						id="email"
						name="email"
						autoComplete="email"
						required
						className="mt-2 block w-full appearance-none rounded-md border px-3 py-2 shadow-sm sm:text-sm bg-gray-100"
					/>
					{fields.email.error && (
						<div className="text-red-500 text-sm absolute bottom-0">
							{fields.email.error}
						</div>
					)}
				</div>
				<Button intent="primary" className="mt-4 block mx-auto" type="submit">
					Login-Code anfordern
				</Button>
			</Form>
		</div>
	);
}

async function renderSendTotpMail(props: TemplateProps) {
	const email = <Template {...props} />;
	return await promiseHash({
		html: render(email),
		text: render(email, { plainText: true }),
	});
}
