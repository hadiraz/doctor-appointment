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
    const userSession = req.session.user;
    if(userSession){
        res.status(200).send(userSession)
    }else{
        res.status(200).send({})
    }
}
