import { pgTable, serial, varchar, integer, boolean } from "drizzle-orm/pg-core";

export const cpus = pgTable("cpus", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  price: integer("price").notNull(),
  core_count: integer("core_count").notNull(),
  core_clock: integer("core_clock").notNull(),
  boost_clock: integer("boost_clock").notNull(),
  tdp: integer("tdp").notNull(),
  graphics: varchar("graphics", { length: 255 }).notNull(),
  smt: boolean("smt").notNull(),
});


export type CpuInsert = typeof cpus.$inferSelect;
export type Cpu = typeof cpus.$inferInsert; 