import React from "react";
import styles from "@/styles/footer/style.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full flex">
        {/* <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">

  <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#99c183" />

  <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#99c183" />
</svg> */}
        {/* <svg
          viewBox="0 -20 700 110"
          width="100%"
          height="110"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C100,90 200,-10 300,50 C400,90 500,-10 600,50 C700,90 800,-10 900,50 V100 H0 Z"
            fill="url(#wavyGradient)"
          />
          <defs>
            <linearGradient id="wavyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(153,193,131,1)" />
              <stop offset="100%" stop-color="rgba(153,193,131,0.4)" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
      <footer
        className={`flex items-center justify-center w-full bg-[#eeeeee] pt-3`}
      >
        <div className="flex flex-col md:flex-row justify-between w-full h-full max-w-7xl p-2">
          <section className="flex text-justify justify-between items-start flex-col w-full h-full md:w-1/2 px-2 mb-10 md:mb-0">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              consequatur. Ea amet a consequatur soluta reiciendis voluptates,
              assumenda iste sed hic voluptatem explicabo repellendus, dicta
              quaerat. Inventore quibusdam repellendus dolore!.
            </p>
          </section>
          <section className="flex px-2 md:px-0 md:justify-center items-center justify-start w-full h-full md:w-1/2">
            <ul className="flex justify-between flex-col h-full p-0 m-0">
              <li className="mb-3 flex items-center">
                <Link className="w-full h-full" href="/">
                  Home page
                </Link>
              </li>
              <li className="mb-3 flex items-center">
                <Link className="w-full h-full" href="/appointment">
                  Appointment
                </Link>
              </li>
              <li className=" mb-3 flex items-center">
                <Link className="w-full h-full" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="mb-3 flex items-center">
                <Link className="w-full h-full" href="/user/login">
                  Profile
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
