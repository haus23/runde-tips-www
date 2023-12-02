import { Outlet } from '@remix-run/react';
import { AppHeader } from '#app/components/header/app-header';

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
