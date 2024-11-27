import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial().primaryKey(),
    name: text().notNull(),
    lastname: text().notNull(),
});
