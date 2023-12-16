import { Button } from '#app/components/(ui)/button';
import { getSession } from '#app/modules/auth/auth-session.server';
import { login, requireAnonymous } from '#app/modules/auth/auth.server';
import { validateLoginCode } from '#app/utils/totp.server';
import { useForm } from '@conform-to/react';
import { parse, refine } from '@conform-to/zod';
import {
	json,
	redirect,
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
} from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { z } from 'zod';

function createFormSchema(constraint?: {
	isValidCode?: (code: string) => Promise<boolean>;
}) {
	return z.object({
		code: z
			.string({ required_error: 'Ohne Code geht es nicht weiter.' })
			.regex(/^\d{6}$/, 'Kein Code. Ein Code hat genau sechs Ziffern.')
			.pipe(
				z.string().superRefine((code, ctx) =>
					refine(ctx, {
						validate: () => constraint?.isValidCode?.(code),
						message: 'Ungültiger Code.',
					}),
				),
			),
	});
}

export async function loader({ request }: LoaderFunctionArgs) {
	await requireAnonymous(request);
	const session = await getSession(request.headers.get('Cookie'));

	const email = session.get('auth:email');
	if (!email) {
		return redirect('/login');
	}

	return null;
}

export async function action({ request }: ActionFunctionArgs) {
	const session = await getSession(request.headers.get('Cookie'));

	const email = session.get('auth:email');
	const secret = session.get('auth:secret');
	if (!email || !secret) {
		return redirect('/login');
	}

	const formData = await request.formData();

	const submission = await parse(formData, {
		schema: createFormSchema({
			isValidCode: async (code) => validateLoginCode(code, secret),
		}),
		async: true,
	});

	if (submission.intent !== 'submit' || !submission.value) {
		return json(submission);
	}

	return login(request, email);
}

export default function OnboardingRoute() {
	const lastSubmission = useActionData<typeof action>();

	const [form, fields] = useForm({
		lastSubmission,
		onValidate({ formData }) {
			return parse(formData, { schema: createFormSchema() });
		},
	});

	return (
		<div className="max-w-sm mx-auto mt-12 border rounded-lg p-4 shadow">
			<header className="border-b pb-2">
				<h2 className="text-xl font-semibold">Anmelde-Code</h2>
			</header>
			<Form method="post" className="mt-6" {...form.props}>
				<div className="relative pb-6">
					<label htmlFor="code" className="block text-sm font-medium">
						Code
					</label>
					<input
						type="text"
						id="code"
						name="code"
						inputMode="numeric"
						autoComplete="one-time-code"
						required
						className="mt-2 block w-full appearance-none rounded-md border px-3 py-2 shadow-sm sm:text-sm bg-gray-100"
					/>
					{fields.code.error && (
						<div className="text-red-500 text-sm absolute bottom-0">
							{fields.code.error}
						</div>
					)}
				</div>
				<Button intent="primary" className="mt-4 block mx-auto" type="submit">
					Anmelden
				</Button>
			</Form>
		</div>
	);
}
