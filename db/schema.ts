import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const userTable = sqliteTable('users', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),

	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),

	roles: text('roles').notNull(),
	email: text('email').unique(),
});

export const rulesetTable = sqliteTable('rulesets', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),

	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),

	description: text('description').notNull(),
	extraQuestionRule: text('extra_question_rule').notNull(),
	matchRule: text('match_rule').notNull(),
	roundRule: text('round_rule').notNull(),
	tipRule: text('tip_rule').notNull(),
});

export const championshipTable = sqliteTable('championships', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),

	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),

	nr: integer('nr').notNull(),
	published: integer('published', { mode: 'boolean' }).notNull().default(false),
	completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
	extraPointsPublished: integer('extra_points_published', { mode: 'boolean' })
		.notNull()
		.default(false),

	rulesetId: integer('ruleset_id')
		.notNull()
		.references(() => rulesetTable.id),
});
