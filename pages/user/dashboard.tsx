import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { EventHandler, useContext, useEffect, useState } from "react";
import { UserLastReserveType } from "@/components/appointment/AppointmentRegisterCode";
import UserLogin from "../api/user/userLogin";
import { withIronSessionSsr } from "iron-session/next";
import { ironLoginOptions } from "@/lib/config/iron-config";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppointmentCreateContext } from "@/context/appointment/LoginContext";
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
const Dashboard = ({ userData }: { userData: NewUserType }) => {
  const [user, setUser] = useState<NewUserType>();
  const router = useRouter();
  const userContext = useContext(AppointmentCreateContext)
  useEffect(() => {
    setUser(userData);
  }, [userData]);
  const logoutHandler = async () => {
    const logout = await fetch("/api/user/userLogout");
    if(logout.status === 200){
      userContext?.dispatch({type : "REMOVE_PHONE"})
      router.push("/")
    }
  };
  return (
    <section className="w-full max-w-7xl flex flex-col h-screen px-3 xl:px-0">
      <div className="flex w-full items-center justify-between mb-3">
        <p className="w-max font-bold text-2xl">Reservation list</p>
        <span
          onClick={logoutHandler}
          className="flex bg-red-400 w-max text-white font-semibold rounded-xl px-2 py-1 hover:bg-red-500 transition duration-200 cursor-pointer"
        >
          Logout
        </span>
      </div>
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
                <tr
                  key={key}
                  className="odd:bg-slate-300 hover:shadow-lg transition-all duration-150"
                >
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

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    if (user) {
      const userData = await fetch("http://localhost:3000/api/user/getUsers")
        .then((resp) => resp)
        .then((resp) => resp.json());
      console.log(userData);
      return {
        props: {
          userData: userData[0],
        },
      };
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/user/login",
        },
      };
    }
  },
  {
    cookieName: ironLoginOptions.cookieName,
    password: ironLoginOptions.password,
    cookieOptions: ironLoginOptions.cookieOptions,
  }
);
