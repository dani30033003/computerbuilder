import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgres://postgres:dara3003@localhost:5432/computer_builder"
});

export async function getDbClient() {
  try {
    await client.connect();
    return drizzle(client);
  } catch (error) {
    throw new Error("Database connection failed");
  }
}
