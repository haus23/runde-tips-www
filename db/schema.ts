import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const userTable = sqliteTable('users', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),

	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),

	roles: text('roles').notNull(),
	email: text('email').unique(),
});
