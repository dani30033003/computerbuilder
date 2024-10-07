import { integer, pgTable, real, varchar } from "drizzle-orm/pg-core";


export const cpuCoolers = pgTable("cpu-coolers", {
    name: varchar('name', { length: 255}).notNull(),
    price: real('price'),
    rpm: real('rpm').array().notNull(),
    noise_level: real('noise_level').array().notNull(),
    color: varchar("color", { length: 255 }),
    size: integer("size"),
})

export type CpuCoolerInsert = typeof cpuCoolers.$inferSelect;
export type CpuCooler = typeof cpuCoolers.$inferInsert;