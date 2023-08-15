import { connectToDatabase } from "@/lib/mongodb";
import { BlogPostType } from "@/pages/blog";
import { Document, WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req)
    if (req.method === "POST") {
        const { db } = await connectToDatabase();
        if (req.body.slug) {
            const singlePost = await db.collection("blog").findOne({ slug: req.body.slug });
            if (singlePost) {
                return res.status(200).json(singlePost)
            } else return res.status(400).end()
        }
    } else if (req.method === "GET") {
        const { db } = await connectToDatabase();
        const allPosts = await db.collection("blog").find({}).toArray();
        if (allPosts.length) {
            return res.status(200).json(allPosts)
        } else return res.status(400).end()
    }
}