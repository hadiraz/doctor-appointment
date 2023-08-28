
import { connectToDatabase } from '@/lib/database/mongodb';
import { Document, WithId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
    timeSettings: {
        startTime: number;
        endTime: number;
        step: number;
        offDays: number[];
    }
    reservedTimes: number[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document>[]>
) {

    const { db } = await connectToDatabase();
    const getData : WithId<Document>[] = await db.collection("reservation").find().toArray();
    return res.status(200).json(getData)
}
