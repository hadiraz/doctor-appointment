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
    const serverApi = "http://localhost:3004/time"
    if (req.method === "PATCH") {
        const fetchData = await fetch(serverApi, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: req.body,
        });
        if (fetchData.ok) {
            const data = await fetchData.json();
            return res.status(200).json(data)
        } else {
            return res.status(200).end()
        }
    }
}
