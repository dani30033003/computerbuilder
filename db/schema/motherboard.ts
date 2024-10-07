import { integer, pgTable, real, varchar } from "drizzle-orm/pg-core";


export const motherboards = pgTable("cpu-coolers", {
    name: varchar('name', { length: 255}).notNull(),
    price: real('price'),
    socket: real('socket').notNull(),
    form_factor: real('form_factor').notNull(),
    max_memory: real("color"),
    size: integer("size"),
    memory_slots: integer("memory_slots"),
    color: varchar('color', {length: 255}),

})

export type motherBoardInsert = typeof motherboards.$inferSelect;
export type motherBoard = typeof motherboards.$inferInsert;