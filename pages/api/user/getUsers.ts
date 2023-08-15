import { connectToDatabase } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { db } = await connectToDatabase();
    if (req.method === "POST") {
        if (req.body) {
            console.log(req.body)
            const getUser = await db.collection("usersLogin").findOne({ "users": { $elemMatch: { "phone": req.body.phone } } }, { projection: { "_id": 0, "users.$": 1 } });
            return res.status(200).json(getUser);
        }
    } else if (req.method === "GET") {
        const getUsers = await db.collection("usersLogin").find().toArray();
        return res.status(200).json(getUsers);
    }
}