import { json } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import { AppHeader } from '#app/components/header/app-header';
import { getPublishedChampionships } from '#app/modules/api/foh/championships';

export async function loader() {
	const championships = await getPublishedChampionships();
	return json({ championships });
}

export default function FohLayout() {
	return (
		<>
			<AppHeader />
			<main className="pt-12 px-2 sm:px-4">
				<Outlet />
			</main>
		</>
	);
}
