import { singleton } from '#app/utils/singleton.server';
import { drizzleInstance } from '#db/drizzle-instance.server';

export const db = singleton('db', () => drizzleInstance);
