import { useFetcher } from '@remix-run/react';
import { cx } from '#app/utils/tailwind';
import { useTheme } from '#app/utils/theme';
import { Button } from '../(ui)/button';
import { Icon } from '../(ui)/icon';

export function ThemeSelect() {
	const fetcher = useFetcher();
	const { colorScheme, isSystem } = useTheme();

	function toggleTheme() {
		const toggledScheme = colorScheme === 'dark' ? 'light' : 'dark';
		fetcher.submit(
			{ colorScheme: toggledScheme },
			{ method: 'POST', action: '/resource/theme' },
		);
	}

	return (
		<Button
			intent="toolbar"
			onClick={toggleTheme}
			className={cx([isSystem && 'text-gray-950'])}
		>
			{colorScheme === 'dark' ? <Icon name="moon" /> : <Icon name="sun" />}
		</Button>
	);
}
