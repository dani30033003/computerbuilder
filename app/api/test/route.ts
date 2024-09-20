import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { cpus } from "@/db/schema/cpu";
import {   db } from "@/db/db";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "app\\public\\api", "cpu.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const cpuData = JSON.parse(fileContent);

  const inserts = cpuData.map(async (cpu: any) => {
    return db.insert(cpus).values({
      name: cpu.name,
      price: cpu.price,
      core_count: cpu.core_count,
      core_clock: cpu.core_clock,
      boost_clock: cpu.boost_clock,
      tdp: cpu.tdp,
      graphics: cpu.graphics,
      smt: cpu.smt
    }).returning();
  });

    const results = await Promise.all(inserts);
    return Response.json({ results })
    
}
