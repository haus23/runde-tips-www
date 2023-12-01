import { Link } from '@remix-run/react';
import { Logo } from '../logo/logo';

export function AppHeader() {
	return (
		<header className="fixed inset-x-0 top-0 flex items-center h-12 bg-gray-100 px-2 border-b shadow-md sm:px-4">
			<Link to="/">
				<Logo />
			</Link>
		</header>
	);
}
