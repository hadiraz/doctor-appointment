import { UserLastReserveType } from '@/components/AppointmentRegisterCode';
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
    const serverAppointmentApi = "http://localhost:3004/time"
    let serverUsersApi = `http://localhost:3004/users`

    if (req.method === "POST") {
        const timesUpdate = await fetch(serverAppointmentApi, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ reservedTimes: req.body.reservedTimes }),
        });
        if (timesUpdate.ok) {
            const getUsers: {
                lastReserves: UserLastReserveType[];
                id: number;
                firstName?: string;
                lastName?: string;
                phone: string;
                idNumber?: string;
            }[] = await fetch(serverUsersApi).then(resp => resp).then(resp => resp.json());

            const checkCurrentUser = getUsers.filter(value => value.phone === req.body.userData.phone);
            let usersCompleteData = req.body.userData;
            let fetchMethod = "PATCH"
            if (checkCurrentUser.length === 0) {
                usersCompleteData = [...getUsers, req.body.userData];
                fetchMethod = "POST"
            } else {
                serverUsersApi = `${serverUsersApi}/${checkCurrentUser[0].id}`
            };
            const userUpdate = await fetch(serverUsersApi, {
                method: fetchMethod,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body.userData),
            });
            const data = await userUpdate.json();
            if (userUpdate.ok) {
                return res.status(200).end()
            } else {
                return res.status(400).end()
            }
        } else {
            return res.status(400).end()
        }
    }
}
