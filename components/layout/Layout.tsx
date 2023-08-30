import Image from "next/image";
import React, { ReactElement, useState, useEffect, createContext } from "react";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

type LayoutContext = {
  setNavStatus :React.Dispatch<React.SetStateAction<boolean>> ;
  setHeaderShown : React.Dispatch<React.SetStateAction<boolean>>;
  setResponsiveHeaderShown : React.Dispatch<React.SetStateAction<boolean>>;
  setFooterShown : React.Dispatch<React.SetStateAction<boolean>>;
  setMainTagMarginClass : React.Dispatch<React.SetStateAction<string>> | undefined;
  navStatus : boolean
};
export const LayoutContext = createContext<LayoutContext>({} as LayoutContext);
const Layout = ({ children }: { children: ReactElement }) => {
  const { pathname } = useRouter();
  const [navStatus, setNavStatus] = useState(false);
  const [headerShown, setHeaderShown] = useState(true);
  const [responsiveHeaderShown, setResponsiveHeaderShown] = useState(true);
  const [footerShown, setFooterShown] = useState(true);
  const [mainTagMarginClass, setMainTagMarginClass] = useState("my-10");
  useEffect(() => {
    console.log(navStatus);
  }, [navStatus]);
  return (
    <div
      className={`flex w-full min-h-screen justify-between flex-col items-center relative font-lato bg-mainBg`}
    >
      {pathname !== "/user/login" && <Header setNavStatus={setNavStatus} navStatus={navStatus}/>}
      {responsiveHeaderShown && (
        <ResponsiveNav
          className={`${navStatus ? "!right-0 w-[60vw]" : ""}`}
          setMenuStatus={setNavStatus}
        />
      )}
      <main
        className={`w-full h-full flex flex-col items-center ${
          pathname !== "/user/login" ? "my-5" : ""
        }`}
      >
        <LayoutContext.Provider
          value={{
            navStatus,
            setNavStatus,
            setHeaderShown,
            setResponsiveHeaderShown,
            setFooterShown,
            setMainTagMarginClass,
          }}
        >
          {children}
        </LayoutContext.Provider>
      </main>
      {pathname !== "/user/login" && <Footer />}
    </div>
  );
};

export default Layout;
