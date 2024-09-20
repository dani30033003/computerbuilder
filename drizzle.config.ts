import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./db/schema/cpu.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:dara3003@localhost:5432/computer_builder",
  },
});
