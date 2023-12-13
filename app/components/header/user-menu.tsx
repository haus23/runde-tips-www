import { Menu } from '@headlessui/react';
import { NavLink } from '@remix-run/react';

import { useUser } from '#app/utils/auth';
import { cx } from '#app/utils/tailwind';

import { Button } from '../(ui)/button';
import { Icon } from '../(ui)/icon';

export function UserMenu() {
	const user = useUser();

	return (
		<Menu as="div" className="relative">
			<Menu.Button as={Button} intent="toolbar">
				<Icon name="avatar" />
			</Menu.Button>
			<Menu.Items className="absolute right-0 mt-3 w-48 bg-gray-100 flex flex-col pb-1 border rounded shadow">
				<Menu.Item disabled>
					<span className="cursor-default px-4 py-2 text-gray-950">
						Hallo {user.name}
					</span>
				</Menu.Item>
				{user.roles.includes('ADMIN') && (
					<Menu.Item>
						<NavLink
							to="/manager"
							className={cx(
								'px-4 py-1.5 data-[headlessui-state=active]:bg-gray-300',
							)}
						>
							Manager
						</NavLink>
					</Menu.Item>
				)}
				<Menu.Item>
					<NavLink
						to="/logout"
						className={cx(
							'px-4 py-1.5 data-[headlessui-state=active]:bg-gray-300',
						)}
					>
						Log Out
					</NavLink>
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
