import { UserLastReserveType } from '@/components/appointment/AppointmentRegisterCode';
import { connectToDatabase } from '@/lib/database/mongodb';
import { Document, ObjectId, WithId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
    startTime: number;
    endTime: number;
    step: number;
    offDays: number[];
    reservedTimes: number[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { db } = await connectToDatabase();

    if (req.method === "POST") {
        const timesUpdate = await db.collection("reservation").updateOne({ "_id": new ObjectId(req.body.reservedTimes.id) }, { $push: { "reservedTimes": req.body.reservedTimes.data } });
        let status = null;
        if (timesUpdate.acknowledged) {
            const getUser: WithId<Document> | null = await db.collection("usersLogin").findOne({ "users": { $elemMatch: { "phone": req.body.userData.phone } } }, { projection: { "_id": 0, "users.$": 1 } });
            if (!getUser) {
                const writeUser = await db.collection("usersLogin").updateOne({}, { $push: { "users": { _id: new ObjectId(), ...req.body.userData, reservesList: [req.body.userData.reservesList] } } });
                writeUser.acknowledged ? status = true : status = false
            } else {
                const updateUser = await db.collection("usersLogin").updateOne({ "users._id": getUser.users[0]._id }, {
                    $push: {
                        "users.$.reservesList": req.body.userData.reservesList
                    }
                });
                updateUser.acknowledged ? status = true : status = false
            };
            if (status) {
                return res.status(200).end()
            } else {
                return res.status(400).end()
            }
        } else {
            return res.status(400).end()
        }
    }
}
