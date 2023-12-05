import { Link } from '@remix-run/react';

import { useTheme } from '#app/utils/theme';
import { Button } from '../(ui)/button';
import { Icon } from '../(ui)/icon';
import { Logo } from '../logo/logo';

export function AppHeader() {
	const { colorScheme } = useTheme();

	return (
		<header className="fixed inset-x-0 top-0 flex items-center justify-between h-12 bg-gray-100 px-2 border-b shadow-md sm:px-4">
			<Link to="/">
				<Logo />
			</Link>
			<Button intent="toolbar">
				{colorScheme === 'dark' ? <Icon name="moon" /> : <Icon name="sun" />}
			</Button>
		</header>
	);
}
