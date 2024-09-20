import { drizzle } from "drizzle-orm/node-postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "pg";

const client = new Client({
     connectionString: "postgres://postgres:dara3003@localhost:5432/computer_builder",
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     try {
       await client.connect();  
       res.status(200).json({ message: 'Database connected successfully' });

     } catch (error) {
       res.status(500).json({ message: 'Database connection failed', error });
     } 
   }


export const db = drizzle(client);