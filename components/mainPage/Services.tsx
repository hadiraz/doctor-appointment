import Image from "next/image";
import React from "react";
import Hospital from "@/public/assets/images/hospital-services.jpg";
import TitleIconContainer from "../shared/TitleIconContainer";
const Services = () => {
  return (
    <>
      <div className="flex items-center w-full mb-7 mt-5">
        <TitleIconContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </TitleIconContainer>

        <p className="flex items-center text-2xl font-extrabold">Our services</p>
      </div>
      <section className="grid mb-10 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8 md:gap-4">
        <div className="flex group rounded-xl bg-zinc-700 shadow-xl relative overflow-hidden max-w-sm hover:scale-[1.05] transition-all duration-200">
          <Image
            className="rounded-xl group-hover:blur-[2px] transition-all duration-200"
            src={Hospital}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxWidth: "100%",
            }}
            alt="hospital"
          />
          <div className="flex absolute items-center justify-center -bottom-full group-hover:bottom-0 transition-all duration-200 left-0 w-full h-full bg-[#54ff57b1] z-[2]">
            <p className="text-white capitalize font-extrabold text-lg">
              description
            </p>
          </div>
        </div>
        <div className="flex group rounded-xl bg-zinc-700 shadow-xl relative overflow-hidden max-w-sm hover:scale-[1.05] transition-all duration-200">
          <Image
            className="rounded-xl group-hover:blur-[2px] transition-all duration-200"
            src={Hospital}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxWidth: "100%",
            }}
            alt="hospital"
          />
          <div className="flex absolute items-center justify-center -bottom-full group-hover:bottom-0 transition-all duration-200 left-0 w-full h-full bg-[#54ff57b1] z-[2]">
            <p className="text-white capitalize font-extrabold text-lg">
              description
            </p>
          </div>
        </div>
        <div className="flex group rounded-xl bg-zinc-700 shadow-xl relative overflow-hidden max-w-sm hover:scale-[1.05] transition-all duration-200">
          <Image
            className="rounded-xl group-hover:blur-[2px] transition-all duration-200"
            src={Hospital}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxWidth: "100%",
            }}
            alt="hospital"
          />
          <div className="flex absolute items-center justify-center -bottom-full group-hover:bottom-0 transition-all duration-200 left-0 w-full h-full bg-[#54ff57b1] z-[2]">
            <p className="text-white capitalize font-extrabold text-lg">
              description
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
