import { NextApiRequest, NextApiResponse } from "next";
import { UserLastReserveType } from "@/components/AppointmentRegisterCode";
type Data = {

}
export default async function UserLogin(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === "POST") {
        const getAllUsers: { id: number, phone: string, reservedList: UserLastReserveType[] }[] = await fetch("http://localhost:3004/users").then(res => res).then(res => res.json());

        const includeUser = getAllUsers.filter(value => value.phone === req.body.phone);
        if(includeUser.length){
            return res.status(200).end()
        }else{
            const setUser = await fetch("http://localhost:3004/users", {
                method : "POST" ,
                headers : {"Content-Type" : "application/json" },
                body : JSON.stringify({phone : req.body.phone})
            });
            if(setUser.ok){
                return res.status(200).end()
            }else return res.status(400).end()
        }
    }
}