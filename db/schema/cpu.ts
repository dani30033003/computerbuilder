import {
  boolean,
  integer,
  pgTable,
  real,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

export const cpus = pgTable("cpus", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  price: real("price"),
  core_count: integer("core_count"),
  core_clock: real("core_clock"),
  boost_clock: real("boost_clock"),
  tdp: integer("tdp"),
  graphics: varchar("graphics", { length: 255 }),
  smt: boolean("smt"),
});

export type CpuInsert = typeof cpus.$inferSelect;
export type Cpu = typeof cpus.$inferInsert;
