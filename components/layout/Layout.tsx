import Image from "next/image";
import React, { ReactElement, useState, useEffect, createContext } from "react";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

export const LayoutContext = createContext({});

const Layout = ({ children }: { children: ReactElement }) => {
  const {pathname} = useRouter();
  const [navStatus, setNavStatus] = useState(false);
  const [headerShown, setHeaderShown] = useState(true);
  const [responsiveHeaderShown, setResponsiveHeaderShown] = useState(true);
  const [footerShown, setFooterShown] = useState(true);
  const [mainTagMarginClass, setMainTagMarginClass] = useState("my-10");
  return (
    <div
      className={`flex w-full min-h-screen justify-between flex-col items-center relative font-lato bg-mainBg`}
    >
      {pathname !== "/user/login" && <Header />}
      {responsiveHeaderShown && (
        <ResponsiveNav
          className={`${!navStatus && "!-right-full !w-[70vw]"}`}
          setMenuStatus={setNavStatus}
        />
      )}
      <main
        className={`w-full h-full flex flex-col items-center ${pathname !== "/user/login" ? "my-5" : ""}`}
      >
        <LayoutContext.Provider value={{setNavStatus , setHeaderShown , setResponsiveHeaderShown , setFooterShown , setMainTagMarginClass}} >{children}</LayoutContext.Provider>
      </main>
      {pathname !== "/user/login" && <Footer />}
    </div>
  );
};

export default Layout;
