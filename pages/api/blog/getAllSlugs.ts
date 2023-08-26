import { connectToDatabase } from "@/lib/database/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {db} = await connectToDatabase();
    const allSlugs = await db.collection("blog").distinct("slug");
    console.log(allSlugs)
    if(allSlugs !== null){
        return res.status(200).json({allSlugs})
    }else return res.status(400).end()
}