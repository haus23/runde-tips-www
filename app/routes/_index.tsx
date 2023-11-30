import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { userTable } from '#/db/schema';
import { db } from '#app/modules/api/db.server';

export function meta() {
	return [
		{ title: 'runde.tips' },
		{ name: 'description', content: 'Haus23 Fussball Tipprunde' },
	];
}

export async function loader() {
	const users = await db.select().from(userTable).all();
	return json(users);
}

export default function Index() {
	const users = useLoaderData<typeof loader>();

	return (
		<div className="flex justify-around mt-4">
			<h1 className="text-3xl font-semibold">runde.tips</h1>
			<ul>
				{users.map((u) => (
					<li key={u.id}>{u.name}</li>
				))}
			</ul>
		</div>
	);
}
