import { NextApiRequest, NextApiResponse } from "next";
import { UserLastReserveType } from "@/components/appointment/AppointmentRegisterCode";
import { connectToDatabase } from "@/lib/mongodb";
import { Document, ObjectId, WithId } from "mongodb";
import { ironLoginOptions } from "@/lib/config/iron-config";
import { withIronSessionApiRoute } from "iron-session/next";
type Data = {

}

export default withIronSessionApiRoute(UserLogin, ironLoginOptions);
async function UserLogin(req: NextApiRequest, res: NextApiResponse<Data>) {
    req.session.destroy()
    return res.status(200).send("logged out")
}
