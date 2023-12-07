import { db } from '../db.server';

export async function getPublishedChampionships() {
	return await db.query.championshipTable.findMany({
		where: (championship, { eq }) => eq(championship.published, true),
		orderBy: (championship, { desc }) => [desc(championship.nr)],
	});
}
