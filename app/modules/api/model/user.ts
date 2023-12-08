import { createSelectSchema } from 'drizzle-zod';
import type { z } from 'zod';
import { userTable } from '#db/schema';

export const User = createSelectSchema(userTable);
export type User = z.infer<typeof User>;
