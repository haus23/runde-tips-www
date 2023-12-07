import { Combobox, Dialog, Popover, Transition } from '@headlessui/react';
import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import { Championship } from '#app/modules/api/model/championship';
import { useChampionship } from '#app/utils/foh/use-championship';
import { useChampionships } from '#app/utils/foh/use-championships';
import { cx } from '#app/utils/tailwind';
import { Button } from '../(ui)/button';
import { Icon } from '../(ui)/icon';

export function ChampionshipSelect() {
	const championships = useChampionships();
	const { championship: current, championshipSegment } = useChampionship();

	const navigate = useNavigate();
	const [query, setQuery] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const filteredChampionships =
		query === ''
			? championships
			: championships.filter((c) => {
					return c.name.toLowerCase().includes(query.toLowerCase());
			  });

	function closeDialog() {
		setIsOpen(false);
		setQuery('');
	}
	function handleSelect(championship: Championship) {
		closeDialog();
		navigate(`/${championship === championships[0] ? '' : championship.slug}`, {
			unstable_viewTransition: true,
		});
	}

	return (
		<>
			<Button
				intent="toolbar"
				className="gap-x-2"
				onClick={() => setIsOpen(true)}
			>
				<Icon name="search" />
				<span className="sr-only sm:not-sr-only">Turnier</span>
			</Button>
			<Dialog open={isOpen} onClose={closeDialog}>
				<div className="fixed inset-0 bg-gray-50/20 backdrop-blur-sm" />
				<Dialog.Panel className="fixed inset-4 bottom-auto z-20 mx-auto max-w-xl rounded-md bg-gray-100 shadow-md border">
					<Combobox defaultValue={current} onChange={handleSelect}>
						<Combobox.Input
							defaultValue={query}
							onChange={(event) => setQuery(event.target.value)}
							onKeyUp={(event) => event.key === 'Enter' && setQuery('')}
							autoComplete="off"
							autoFocus
							placeholder="Turnier"
							className="w-full bg-transparent px-6 py-2.5 font-semibold placeholder:text-gray-950"
						/>
						<Combobox.Options static className="border-t [&:not(:empty)]:p-2">
							{filteredChampionships.map((championship) => (
								<Combobox.Option
									value={championship}
									key={championship.id}
									className={cx(
										'flex w-full select-none items-center justify-between px-4 py-2 font-semibold rounded-md data-[headlessui-state=active]:bg-gray-300',
										championship.id === current.id && 'text-violet-950',
									)}
								>
									{championship.name}
									{championship.id === current.id && <Icon name="check" />}
								</Combobox.Option>
							))}
						</Combobox.Options>
						{query !== '' && filteredChampionships.length === 0 && (
							<div className="px-4 py-14 text-center text-gray-950 sm:px-14">
								<p className="font-semibold">
									Kein Turnier passt zu der Suche.
								</p>
							</div>
						)}
					</Combobox>
				</Dialog.Panel>
			</Dialog>
		</>
	);
}
