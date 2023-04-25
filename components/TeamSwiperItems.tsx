import Image from "next/image";
import React, { useState } from "react";
import Doctor from "@/public/assets/images/doctor.png";
import styled from "styled-components";

type ArticleType = {
  infoStatus: boolean;
};

const ArticleSec = styled.article<ArticleType>`
  display: flex;
`;

const TeamSwiperItems = () => {
  const [infoStatus, setInfoStatus] = useState(false);
  return (
    <div className="flex min-h-[400px] flex-col items-center z-10">
      <div
        className={`flex justify-center rounded-full overflow-hidden absolute bg-white shadow-lg`}
      >
        <Image
          className="flex items-center justify-center"
          src={Doctor}
          width={150}
          height={150}
          alt="doctor"
        />
      </div>
      <ArticleSec
        infoStatus={infoStatus}
        className={`transition-all ${
          infoStatus ? "z-20" : "-z-10"
        }  duration-200 ${
          infoStatus ? "right-0" : "right-full"
        } flex-col w-full items-center rounded-3xl bg-white p-4 pt-20 mt-20`}
      >
        <h3 className="text-text text-2xl font-extrabold text-center">Dr.Name LastName</h3>
        <ul className="flex items-center font-semibold flex-col text-sm my-5 text-text text-left">
          <li className="w-full flex items-center my-1 ">
            {/* <span className="flex rounded-full w-2 h-2 mr-4 bg-dark"></span> */}
            <p className="w-full h-full text-gray-500 break-words">
              Lorem consectetur adipisicing elit. Voluptate, iure.
            </p>
          </li>
          <li className="flex items-center my-1">
            {/* <span className="flex rounded-full w-3 h-3 mr-4 bg-dark"></span> */}
            <p className="w-full h-full text-gray-500 break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, iure.
            </p>
          </li>
          <li className="flex items-center my-1">
            {/* <span className="flex rounded-full w-3 h-3 mr-4 bg-dark"></span> */}
            <p className="w-full h-full text-gray-500 break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, iure.
            </p>
          </li>
          <li className="flex items-center my-1">
            {/* <span className="flex rounded-full w-3 h-3 mr-4 bg-dark"></span> */}
            <p className="w-full h-full text-gray-500 break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, iure.
            </p>
          </li>
        </ul>
        {/* <button className="lg:hidden flex bg-buttons rounded-2xl p-3 text-white font-bold text-lg shadow-lg shadow-buttonShadows my-7 items-center justify-between">
          Book appointment
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button> */}
      </ArticleSec>
        {/* <button onClick={() => setInfoStatus(!infoStatus)}>click</button> */}
    </div>
  );
};

export default TeamSwiperItems;
