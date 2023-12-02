export function meta() {
	return [
		{ title: 'runde.tips' },
		{ name: 'description', content: 'Haus23 Fussball Tipprunde' },
	];
}

export default function HomeRoute() {
	return (
		<div className="mt-12 flex justify-around">
			<h2 className="text-3xl">Willkommen!</h2>
		</div>
	);
}
