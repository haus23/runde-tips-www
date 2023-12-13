import { db } from '../db.server';
import { transformFromRawUser } from '../model/user';

export async function getUserById(id: number) {
	const user = transformFromRawUser(
		await db.query.userTable.findFirst({
			where: (user, { eq }) => eq(user.id, id),
		}),
	);
	return user;
}

export async function getUserByEmail(email: string) {
	const user = transformFromRawUser(
		await db.query.userTable.findFirst({
			where: (user, { eq }) => eq(user.email, email),
		}),
	);
	return user;
}
