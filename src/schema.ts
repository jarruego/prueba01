import { serial, text, pgTable, pgSchema, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial().primaryKey(),
    name: varchar(),
    age: integer()
});