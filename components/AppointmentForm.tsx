import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";
import React from "react";

const AppointmentForm = ({
  sectionSelected,
  setSectionSelected,
}: SectionConfigType) => {
  return (
    <form
      className={`flex px-3 w-full flex-col items-center rounded-2xl py-5 text-text transition-all duration-200 `}
    >
      <div style={{...glassStyle}} className="flex w-fit max-w-full rounded-3xl relative z-[2] backdrop-blur-md overflow-hidden pl-3">
        {/* <span className="flex absolute w-8 backdrop-blur-sm h-full right-[-8px] top-0 z-[1]"></span> */}
        <div className="flex w-full h-full items-center overflow-x-auto overflow-y-hidden no-scrollbar py-1 px-5">
          <div className="flex flex-col justify-center items-center px-4 py-2 bg-primary rounded-lg border-[2px] border-white">
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
        <div className="flex w-fit flex-wrap mt-5">
          <div style={{...glassStyle}} className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl border-white border-[2px] mx-1 my-1 font-bold text-white !bg-primary">
            16-18
          </div>
          <div style={{boxShadow : "0px 0px 12px -2px #ccc" , background : "#ffffff5b"}}  className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1">
            16-18
          </div>
          <div style={{boxShadow : "0px 0px 12px -2px #ccc" , background : "#ffffff5b"}}  className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1">
            16-18
          </div>
          <div style={{boxShadow : "0px 0px 12px -2px #ccc" , background : "#ffffff5b"}}  className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1">
            16-18
          </div>
          <div style={{boxShadow : "0px 0px 12px -2px #ccc" , background : "#ffffff5b"}}  className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1">
            16-18
          </div>
          <div style={{boxShadow : "0px 0px 12px -2px #ccc" , background : "#ffffff5b"}}  className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1">
            16-18
          </div>
          
        </div>
        <div className="flex w-full justify-end items-center mt-6">
          <button className="rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg">
            Next
          </button>
        </div>
    </form>
  );
};

export default AppointmentForm;
