import { getDbClient } from "@/db/db";
import { Cpu, cpus } from "@/db/schema/cpu";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "app/public/api", "cpu.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const cpuData = JSON.parse(fileContent) as Cpu[];

  const rowsToInsert = cpuData.map((cpu) => ({
    name: cpu.name,
    price: cpu.price,
    core_count: cpu.core_count,
    core_clock: cpu.core_clock,
    boost_clock: cpu.boost_clock,
    tdp: cpu.tdp,
    graphics: cpu.graphics,
    smt: cpu.smt,
  }));

  try {
    const db = await getDbClient();
    const results = await db.insert(cpus).values(rowsToInsert).returning();
    return Response.json(results);
  } catch (e) {
    console.error(e);
    return new Response(`Error inserting cpus: ${(e as Error).message}`, {
      status: 500,
    });
  }
}
