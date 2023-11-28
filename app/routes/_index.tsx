export function meta() {
	return [
		{ title: 'runde.tips' },
		{ name: 'description', content: 'Haus23 Fussball Tipprunde' },
	];
}

export default function Index() {
	return (
		<div className="flex justify-around mt-4">
			<h1 className="text-3xl font-semibold">runde.tips</h1>
		</div>
	);
}
