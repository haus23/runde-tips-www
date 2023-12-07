import { useChampionship } from '#app/utils/foh/use-championship';

export function meta() {
	return [
		{ title: 'runde.tips' },
		{ name: 'description', content: 'Haus23 Fussball Tipprunde' },
	];
}

export default function HomeRoute() {
	const { championship } = useChampionship();

	return (
		<div className="mt-12 flex justify-around">
			<h2 className="text-3xl">Aktuelles Turnier: {championship.name}</h2>
		</div>
	);
}
