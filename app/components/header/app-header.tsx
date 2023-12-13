import { Link, NavLink } from '@remix-run/react';

import { useIsAuthenticated } from '#app/utils/auth';
import { useChampionship } from '#app/utils/foh/use-championship';

import { Logo } from '../logo';
import { ChampionshipSelect } from './championship-select';
import { ThemeSelect } from './theme-select';
import { UserMenu } from './user-menu';

export function AppHeader() {
	const { championshipSegment } = useChampionship();
	const isAuthenticated = useIsAuthenticated();

	return (
		<header className="fixed inset-x-0 top-0 flex items-center justify-between h-12 bg-gray-100 px-2 border-b shadow-md sm:px-4">
			<div className="flex gap-x-4 items-center">
				<Link to="/" className="rounded-lg">
					<Logo />
				</Link>
				<nav>
					<NavLink to={`/${championshipSegment}`}>Tabelle</NavLink>
				</nav>
			</div>
			<div className="flex items-center gap-x-2">
				<ChampionshipSelect />
				<ThemeSelect />
				{isAuthenticated ? (
					<UserMenu />
				) : (
					<div className="flex items-center gap-x-2">
						<span className="border h-10 mx-2" />
						<NavLink to="/login">Log In</NavLink>
					</div>
				)}
			</div>
		</header>
	);
}
