import { Form } from '@remix-run/react';
import { Button } from '#app/components/(ui)/button';

export default function LoginRoute() {
	return (
		<div className="max-w-sm mx-auto mt-12 border rounded-lg p-4 shadow">
			<header className="border-b pb-2">
				<h2 className="text-xl font-semibold">Anmeldung</h2>
			</header>
			<Form method="post" className="mt-6">
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
					<div className="text-red-500 text-sm absolute bottom-0">
						Ein Problem trat auf!
					</div>
				</div>
				<Button intent="primary" className="mt-4 block mx-auto" type="submit">
					Login-Code anfordern
				</Button>
			</Form>
		</div>
	);
}
