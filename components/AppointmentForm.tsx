import { SectionConfigType } from "@/pages/appointment";
import React from "react";

const AppointmentForm = ({
  sectionSelected,
  setSectionSelected,
}: SectionConfigType) => {
  return (
    <form
      className={`flex absolute w-full flex-col items-center rounded-2xl py-5 text-text transition-all duration-200`}
    >
      <div style={{boxShadow : "0px 0px 12px -2px #ccc" , background : "#fff"}} className="flex w-fit max-w-full rounded-3xl relative z-[2] backdrop-blur-md overflow-hidden">
        <span className="flex absolute w-8 bg-white blur-md h-full right-[-8px] top-0 z-[1]"></span>
        <span className="flex w-8 absolute bg-white blur-md h-full left-[-9px] top-0 z-[1]"></span>
        <div className="flex w-full h-full items-center overflow-x-auto overflow-y-hidden no-scrollbar py-1 px-5">
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 bg-primary rounded-lg">
            <p className=" text-sm capitalize text-white font-extrabold">sunday</p>
            <p className="text-center text-xs text-white font-medium">2023-2-4</p>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 rounded-lg">
            <p className="text-text text-sm capitalize text-whit font-bold">sunday</p>
            <p className="text-center text-xs text-[#acacac] font-medium">2023-2-4</p>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 rounded-lg">
            <p className="text-text text-sm capitalize text-whit font-bold">sunday</p>
            <p className="text-center text-xs text-[#acacac] font-medium">2023-2-4</p>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 rounded-lg">
            <p className="text-text text-sm capitalize text-whit font-bold">sunday</p>
            <p className="text-center text-xs text-[#acacac] font-medium">2023-2-4</p>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 rounded-lg">
            <p className="text-text text-sm capitalize text-whit font-bold">sunday</p>
            <p className="text-center text-xs text-[#acacac] font-medium">2023-2-4</p>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 rounded-lg">
            <p className="text-text text-sm capitalize text-whit font-bold">sunday</p>
            <p className="text-center text-xs text-[#acacac] font-medium">2023-2-4</p>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 rounded-lg">
            <p className="text-text text-sm capitalize text-whit font-bold">sunday</p>
            <p className="text-center text-xs text-[#acacac] font-medium">2023-2-4</p>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 rounded-lg">
            <p className="text-text text-sm capitalize text-whit font-bold">sunday</p>
            <p className="text-center text-xs text-[#acacac] font-medium">2023-2-4</p>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-2 mx-2 rounded-lg">
            <p className="text-text text-sm capitalize text-whit font-bold">sunday</p>
            <p className="text-center text-xs text-[#acacac] font-medium">2023-2-4</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppointmentForm;
