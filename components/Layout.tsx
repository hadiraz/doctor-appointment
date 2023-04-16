import Image from "next/image";
import React, { ReactElement, useState } from "react";
import logo from "@/public/assets/logo_med.png";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";

const Layout = ({ children }: { children: ReactElement }) => {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <div className={`flex w-full flex-col items-center font-lato bg-mainBg overflow-x-hidden`}>
      <header className="w-full flex justify-between items-center px-4 h-16 relative z-10 bg-transparent backdrop-blur-sm backdrop-filter">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src={logo}
              style={{ background: "none" }}
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        <nav className="flex justify-between items-center h-full">
          <ul className="hidden md:flex w-full items-center h-full">
            <li className="flex items-center justify-center transition-all duration-100 after:transition-all after:duration-300 hover:pb-1 mx-3 relative after:w-0 after:rounded-sm after:absolute after:h-[2px] after:bottom-0 hover:after:w-full after:bg-primary cursor-pointer hover:font-semibold">
              Home
            </li>
            <li className="flex items-center justify-center transition-all duration-100 after:transition-all after:duration-300 hover:pb-1 mx-3 relative after:w-0 after:rounded-sm after:absolute after:h-[2px] after:bottom-0 hover:after:w-full after:bg-primary cursor-pointer hover:font-semibold">
              About
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        {navStatus && <div className="flex w-screen h-screen absolute top-0 left-0 backdrop-blur-sm" onClick={()=>setNavStatus(false)}></div>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          onClick={()=>setNavStatus(true)}
          className="w-7 h-7 md:hidden cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
          
        </svg>
          <ResponsiveNav className={`${!navStatus && "-right-full"}`} setMenuStatus={setNavStatus}/>  
        
      </header>
      <main className="w-full h-full">{children}</main>
    </div>
  );
};

export default Layout;
