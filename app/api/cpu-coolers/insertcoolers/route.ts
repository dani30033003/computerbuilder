import { db} from "@/db/db";
import { CpuCooler, cpuCoolers } from "@/db/schema/cpu-cooler";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "app/public/api", "cpu-cooler.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const cpuCoolersData = JSON.parse(fileContent) as CpuCooler[];

  const rowsToInsert = cpuCoolersData.map((cooler) => ({
    name: cooler.name,
    price: cooler.price,
    rpm: cooler.rpm ? Array.isArray(cooler.rpm) ? cooler.rpm : [cooler.rpm] : [],
    noise_level: cooler.noise_level ? Array.isArray(cooler.noise_level) ? cooler.noise_level : [cooler.noise_level] : [],
    color: cooler.color,
    size: cooler.size,
  }));

  try {
    // const firstRow = rowsToInsert[0]
    const results = await db.insert(cpuCoolers).values(rowsToInsert).returning();
    return Response.json(results);
  } catch (e) {
        console.error(e);
    return new Response(`Error inserting cpus-coolers: ${(e as Error).message}`, {
      status: 500,
    });
  }
}
