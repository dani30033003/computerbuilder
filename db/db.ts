import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgres://postgres:dara3003@localhost:5432/computer_builder"
});

await client.connect();

export const db = drizzle(client);
