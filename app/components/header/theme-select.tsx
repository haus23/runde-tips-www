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
			className={cx([isSystem && 'text-gray-950', 'overflow-clip'])}
		>
			<div className="relative h-5 w-5">
				<Icon
					name="moon"
					className="absolute inset-0 origin-[50%_100px] rotate-90 transform transition-transform duration-300 dark:rotate-0"
				/>
				<Icon
					name="sun"
					className="absolute inset-0 origin-[50%_100px] rotate-0 transform transition-transform duration-300 dark:-rotate-90"
				/>
			</div>
		</Button>
	);
}
