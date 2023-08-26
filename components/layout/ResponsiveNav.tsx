import { AppointmentCreateContext } from "@/context/user/LoginContext";
import { sessionCheck } from "@/lib/utils/sessionCheck";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { use, useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const ResponsiveNav = ({
  className,
  setMenuStatus,
}: {
  setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) => {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(false);
  const userContext = useContext(AppointmentCreateContext);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const user = await sessionCheck();
      userContext?.dispatch({type : "SET_PHONE" , payload : {phone : user.phone}});
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    setMenuStatus(false);
  }, [pathname]);
  return (
    <section
      className={`w-[60vw] h-screen flex md:hidden flex-col fixed top-0 -right-[60%] bg-white transition-all duration-200 ease-in z-20 ${className}`}
    >
      <div
        className="flex w-full items-center py-4 px-3"
        onClick={() => setMenuStatus(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex w-full items-center py-3 px-2">
        {loading ? (
          <ClipLoader size={30} color="#36d7b7" />
        ) : (
          <>
            <div className="flex w-9 h-9 rounded-full bg-white border border-gray-400 mr-2"></div>
            <Link
              href={`${userContext?.phone ? "/user/dashboard" : "/user/login"}`}
            >
              {userContext?.phone ? "Profile" : "login please"}
            </Link>
          </>
        )}
      </div>
      <nav className="w-full h-full flex mt-3">
        <ul className="w-full h-full flex flex-col">
          <li className={`flex items-center my-3`}>
            <Link
              href="/"
              className={`transition-all duration-150 ${
                pathname === "/" ? "ml-3 text-primary" : "text-gray-600 ml-2"
              } flex items-center capitalize font-semibold h-full w-full`}
            >
              home
            </Link>
          </li>
          <li className={`flex items-center my-3`}>
            <Link
              href="/appointment"
              className={`transition-all duration-150 ${
                pathname === "/appointment"
                  ? "ml-3 text-primary"
                  : "text-gray-600 ml-2"
              } flex items-center capitalize font-semibold h-full w-full`}
            >
              appointment
            </Link>
          </li>
          <li className={`flex items-center my-3`}>
            <Link
              href="/blog"
              className={`transition-all duration-150 ${
                pathname === "/blog"
                  ? "ml-3 text-primary"
                  : "text-gray-600 ml-2"
              } flex items-center capitalize font-semibold h-full w-full`}
            >
              blog
            </Link>
          </li>
          <li className={`flex items-center my-3`}>
            <Link
              href="/about"
              className={`transition-all duration-150 ${
                pathname === "/about"
                  ? "ml-3 text-primary"
                  : "text-gray-600 ml-2"
              } flex items-center capitalize font-semibold h-full w-full`}
            >
              about us
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default ResponsiveNav;
