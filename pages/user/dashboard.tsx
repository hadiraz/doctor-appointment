import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { UserLastReserveType } from "@/components/appointment/AppointmentRegisterCode";
import UserLogin from "../api/user/userLogin";
type NewUserType = {
  users: {
    reservesList: UserLastReserveType[];
    id: number;
    firstName?: string;
    lastName?: string;
    phone: string;
    idNumber?: string;
  }[];
};
const Dashboard = () => {
  const [user, setUser] = useState<NewUserType>();
  useEffect(() => {
    (async () => {
      const loginInfo: NewUserType = await fetch(
        "http://localhost:3000/api/user/getUsers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: "09121549942" }),
        }
      )
        .then((resp) => resp)
        .then((resp) => resp.json());
      setUser(loginInfo);
    })();
  }, []);
  return (
    <section className="w-full max-w-7xl flex flex-col h-screen px-3 xl:px-0">
      <p className="w-full font-bold text-2xl relative">
        Reservation list
        {/* <span className="flex absolute w-full "></span> */}
      </p>
      <div className="flex mt-5 w-full rounded-lg overflow-x-auto">
        <table className="w-full text-center capitalize rounded-lg">
          <thead className="sticky top-0 left-0 bg-white">
            <tr>
              <th className="p-2 min-w-max">name</th>
              <th className="p-2 min-w-max">reserved time</th>
              <th className="p-2 min-w-max">id number</th>
              <th className="p-2 min-w-max">prosecute id</th>
            </tr>
          </thead>
          <tbody>
            {user?.users[0].reservesList.map((value, key) => {
              const date = new Date(value.reservedTime);
              return (
                <tr key={key} className="odd:bg-slate-300 hover:shadow-lg transition-all duration-150">
                  <td className="p-2 min-w-max">
                    {value.firstName} {value.lastName}
                  </td>
                  <td className="p-2 min-w-max">
                    <span className="mr-1">
                      {date.getFullYear()}/{date.getMonth() + 1}/
                      {date.getDate()}
                    </span>
                    -
                    <span className="ml-1">
                      {date.getHours()}:
                      {date.getMinutes().toString().length < 2
                        ? "00"
                        : date.getMinutes()}
                    </span>
                  </td>
                  <td className="p-2 min-w-max">{value.idNumber}</td>
                  <td className="p-2 min-w-max">1548</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
