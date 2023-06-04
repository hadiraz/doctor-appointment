import { glassStyle } from "@/public/styles/style";
import React from "react";
import Link from "next/link";

const AppointmentSuccess = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <svg
        // fill="#000000"
        className=" fill-green-800 rounded-full shadow-2xl animate-pulse animate-bounce"
        height="120px"
        width="120px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <path
              d="M256,0C114.837,0,0,114.843,0,256s114.837,256,256,256s256-114.843,256-256S397.163,0,256,0z M376.239,227.501
			L257.348,346.391c-13.043,13.043-34.174,13.044-47.218,0l-68.804-68.804c-13.044-13.038-13.044-34.179,0-47.218
			c13.044-13.044,34.174-13.044,47.218,0l45.195,45.19l95.282-95.278c13.044-13.044,34.174-13.044,47.218,0
			C389.283,193.321,389.283,214.462,376.239,227.501z"
            />
          </g>
        </g>
      </svg>
      <p className="w-full text-center mt-5 font-bold text-text">
        Your appointment has been booked.
      </p>
      <span className="flex w-full justify-center">
        <Link
        scroll
          className="opacity-100 disabled:opacity-70 rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg"
          href="/"
        >
          Home Page
        </Link>
      </span>
    </div>
  );
};

export default AppointmentSuccess;
