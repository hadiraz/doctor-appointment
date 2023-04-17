import Image from "next/image";
import React from "react";
import Doctor from "@/public/assets/images/doctor.jpg";
const TeamSwiperItems = () => {
  return (
    <div className="flex w-full h-full flex-col items-center bg-white rounded-3xl p-4">
      <div className="flex justify-center relative z-10 mr-5 items-center bg-white w-3/4 p-3 rounded-3xl flex-shrink-0 shadow-xl shadow-buttonShadows">
        <Image className="rounded-xl flex-shrink-0" src={Doctor} width={300} height={300} alt="doctor"/>
      </div>
      <article className="flex flex-col w-full items-center mt-8">
        <h3 className="text-text text-3xl font-extrabold">Dr.Name LastName</h3>
        <ul className="flex font-semibold flex-col text-lg my-5 text-text">
          <li className="flex items-center my-1">
            <span className="flex rounded-full w-3 h-3 mr-4 bg-dark"></span>
            <p className="w-full h-full text-gray-500 break-words">Lorem consectetur adipisicing elit. Voluptate, iure.</p>
          </li>
          <li className="flex items-center my-1">
            <span className="flex rounded-full w-3 h-3 mr-4 bg-dark"></span>
            <p className="w-full h-full text-gray-500 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iure.</p>
          </li>
          <li className="flex items-center my-1">
            <span className="flex rounded-full w-3 h-3 mr-4 bg-dark"></span>
            <p className="w-full h-full text-gray-500 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iure.</p>
          </li>
          <li className="flex items-center my-1">
            <span className="flex rounded-full w-3 h-3 mr-4 bg-dark"></span>
            <p className="w-full h-full text-gray-500 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iure.</p>
          </li>
        </ul>
        <button className="lg:hidden flex bg-buttons rounded-2xl p-3 text-white font-bold text-lg shadow-lg shadow-buttonShadows my-7 items-center justify-between">
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
          </button>
      </article>
    </div>
  );
};

export default TeamSwiperItems;
