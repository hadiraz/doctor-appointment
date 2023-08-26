import { NextApiRequest, NextApiResponse } from "next";
import { UserLastReserveType } from "@/components/appointment/AppointmentRegisterCode";
import { connectToDatabase } from "@/lib/database/mongodb";
import { Document, ObjectId, WithId } from "mongodb";
import { ironLoginOptions } from "@/lib/config/iron-config";
import { withIronSessionApiRoute } from "iron-session/next";
type Data = {

}

export default withIronSessionApiRoute(UserLogin, ironLoginOptions);
async function UserLogin(req: NextApiRequest, res: NextApiResponse<Data>) {
    let userInfo = { id: null, phone: "" };

    if (req.method === "POST") {
        const { db, client } = await connectToDatabase();
        const getUser = await db.collection("usersLogin").findOne({ "users": { $elemMatch: { "phone": req.body.phone } } }, { projection: { "_id": 0, "users.$": 1 } });
        if (getUser) {
            req.session.user = {
                phone: req.body.phone
            }
            await req.session.save()
            return res.status(200).end();
        } else {
            const writeUser = await db.collection("usersLogin").updateOne({}, { $push: { "users": { _id: new ObjectId(), phone: req.body.phone, reservesList: [] } } });
            if (writeUser.acknowledged) {
                return res.status(200).end()
            } else return res.status(400).end()
        }
    }
}
