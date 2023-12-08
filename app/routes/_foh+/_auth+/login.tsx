import { useForm } from '@conform-to/react';
import { parse, refine } from '@conform-to/zod';
import { Form, useActionData } from '@remix-run/react';
import { z } from 'zod';

import { type DataFunctionArgs, json, redirect } from '@remix-run/node';
import { Button } from '#app/components/(ui)/button';
import { getUserByEmail } from '#app/modules/api/foh/users';
import type { User } from '#app/modules/api/model/user';
import {
}
	getSession,
} from '#app/modules/auth/auth-session.server';
import { requireAnonymous } from '#app/modules/auth/auth.server';

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

	let user: User;
	const submission = await parse(formData, {
		schema: createFormSchema({
			isKnownEmail: async (email) => {
				const userCandidate = await getUserByEmail(email);
				if (userCandidate === null) {
					return false;
				}
				user = userCandidate;
				return true;
			},
		}),
		async: true,
	});

	if (submission.intent !== 'submit' || !submission.value) {
		return json(submission);
	}

	return redirect('/onboarding');
}

export default function LoginRoute() {
	const lastSubmission = useActionData<typeof action>();
	const email = undefined;

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
