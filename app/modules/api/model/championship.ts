import { createSelectSchema } from 'drizzle-zod';
import type { z } from 'zod';
import { championshipTable } from '#db/schema';

export const Championship = createSelectSchema(championshipTable);
export type Championship = z.infer<typeof Championship>;
