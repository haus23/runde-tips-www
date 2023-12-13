import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { userTable } from '#db/schema';

const Roles = z.array(z.enum(['PLAYER', 'ADMIN']));

const RawUser = createSelectSchema(userTable);
type RawUser = z.infer<typeof RawUser>;

export const User = createSelectSchema(userTable).extend({ roles: Roles });
export type User = z.infer<typeof User>;

export function transformFromRawUser(rawUser?: RawUser) {
	if (!rawUser) return null;

	const user = { ...rawUser, roles: JSON.parse(rawUser.roles) };
	return User.parse(user);
}
