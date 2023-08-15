import AppointmentForm, { AppointmentDataType } from "@/components/appointment/AppointmentForm";
import AppointmentInformation from "@/components/appointment/AppointmentInformation";
import AppointmentPhoneInput from "@/components/appointment/AppointmentPhoneInput";
import AppointmentRegisterCode, { UserLastReserveType } from "@/components/appointment/AppointmentRegisterCode";
import AppointmentSuccess from "@/components/appointment/AppointmentSuccess";
import { Document, FindCursor, WithId } from "mongodb";
import React, { useEffect, useRef, useState } from "react";
import type {GetServerSideProps , InferGetServerSidePropsType} from "next"
import { time } from "console";
export type SectionConfigType = {
  reserveStates: ReservedSatesType;
  sectionSelected: number;
  setSectionSelected: React.Dispatch<React.SetStateAction<number>>;
};
export type ReserveType = {
  id?: object;
  firstName: string;
  lastName: string;
  phone: string;
  idNumber: string;
  reservedDate: number;
  authDigits: string;
  reservesList: UserLastReserveType[];
};
export type ReservedSatesType = {
  reserveData: ReserveType;
  setReserveData: React.Dispatch<React.SetStateAction<ReserveType>>;
};
const Appointment = () => {
  const [sectionSelected, setSectionSelected] = useState<number>(0);
  const [reserveData, setReserveData] = useState<ReserveType>({
    firstName: "",
    lastName: "",
    phone: "",
    idNumber: "",
    reservedDate: 0,
    authDigits: "",
    reservesList :[]
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionSelected]);
  return (
    <section className="flex flex-col items-center w-full sm:max-w-2xl min-h-screen bg-transparent rounded-xl px-2 relative z-[2]">
      <div className="hidden sm:flex w-full items-center">
        <div className="flex flex-col items-center justify-center relative">
          <span
            className={`flex relative items-center justify-center border-[3px] border-primary mx-2 ${
              sectionSelected >= 0 ? "text-white" : "text-text"
            } rounded-full w-12 h-12 overflow-hidden`}
          >
            <span
              className={`absolute ${
                sectionSelected >= 0 ? "left-[-2px]" : "-left-12"
              } transition-all duration-200 w-12 h-12 rounded-full top-[-2px] bg-primary z-[1]`}
            ></span>
            <span className="flex absolute z-[2]">1</span>
          </span>
          <span
            className={`flex ${
              sectionSelected === 0 ? "font-bold" : ""
            } text-sm capitalize mt-3`}
          >
            phone
          </span>
        </div>
        <span className="flex h-[3px] w-full bg-gray-300 relative -top-4">
          <span
            className={`${
              sectionSelected > 0 ? "w-full" : "w-0"
            } h-full bg-primary flex transition-all duration-200`}
          ></span>
        </span>
        <div className="flex flex-col items-center justify-center relative">
          <span
            className={`flex relative items-center justify-center border-[3px] border-primary mx-2 ${
              sectionSelected >= 1 ? "text-white" : "text-text"
            } rounded-full w-12 h-12 overflow-hidden`}
          >
            <span
              className={`absolute ${
                sectionSelected >= 1 ? "left-[-2px]" : "-left-12"
              } transition-all duration-200 w-12 h-12 rounded-full top-[-2px] bg-primary z-[1]`}
            ></span>
            <span className="flex absolute z-[2]">2</span>
          </span>
          <span
            className={`flex ${
              sectionSelected === 1 ? "font-bold" : ""
            } text-sm capitalize mt-3`}
          >
            authenticate
          </span>
        </div>
        <span className="flex h-[3px] w-full bg-gray-300 relative -top-4">
          <span
            className={`${
              sectionSelected > 1 ? "w-full" : "w-0"
            } h-full bg-primary flex transition-all duration-200`}
          ></span>
        </span>
        <div className="flex flex-col items-center justify-center relative">
          <span
            className={`flex relative items-center justify-center border-[3px] border-primary mx-2 ${
              sectionSelected >= 2 ? "text-white" : "text-text"
            } rounded-full w-12 h-12 overflow-hidden`}
          >
            <span
              className={`absolute ${
                sectionSelected >= 2 ? "left-[-2px]" : "-left-12"
              } transition-all duration-200 w-12 h-12 rounded-full top-[-2px] bg-primary z-[1]`}
            ></span>
            <span className="flex absolute z-[2]">3</span>
          </span>
          <span
            className={`flex ${
              sectionSelected === 2 ? "font-bold" : ""
            } text-sm capitalize mt-3`}
          >
            Register
          </span>
        </div>
        <span className="flex h-[3px] w-full bg-gray-300 relative -top-4">
          <span
            className={`${
              sectionSelected > 2 ? "w-full" : "w-0"
            } h-full bg-primary flex transition-all duration-200`}
          ></span>
        </span>
        <div className="flex flex-col items-center justify-center relative">
          <span
            className={`flex relative items-center justify-center border-[3px] border-primary mx-2 ${
              sectionSelected >= 3 ? "text-white" : "text-text"
            } rounded-full w-12 h-12 overflow-hidden`}
          >
            <span
              className={`absolute ${
                sectionSelected > 2 ? "left-[-2px]" : "-left-12"
              } transition-all duration-200 w-12 h-12 rounded-full top-[-2px] bg-primary z-[1]`}
            ></span>
            <span className="flex absolute z-[2]">4</span>
          </span>
          <span
            className={`flex ${
              sectionSelected === 3 ? "font-bold" : ""
            } text-sm capitalize mt-3`}
          >
            reserve
          </span>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(123,255,123,1) 0%, rgba(197,255,253,1) 100%)",
        }}
        className="flex w-full min-h-[300px] p-3 relative items-center rounded-2xl shadow-xl mt-10 justify-center"
      >
        {sectionSelected === 0 && (
          <AppointmentPhoneInput
            reserveStates={{ reserveData, setReserveData }}
            sectionSelected={sectionSelected}
            setSectionSelected={setSectionSelected}
          />
        )}
        {sectionSelected === 1 && (
          <AppointmentRegisterCode
            reserveStates={{ reserveData, setReserveData }}
            sectionSelected={sectionSelected}
            setSectionSelected={setSectionSelected}
          />
        )}
        {sectionSelected === 2 && (
          <AppointmentInformation
            reserveStates={{ reserveData, setReserveData }}
            sectionSelected={sectionSelected}
            setSectionSelected={setSectionSelected}
          />
        )}
        {sectionSelected === 3 && (
          <AppointmentForm
            reserveStates={{ reserveData, setReserveData }}
            sectionSelected={sectionSelected}
            setSectionSelected={setSectionSelected}
          />
        )}
        {sectionSelected === 4 && <AppointmentSuccess />}
      </div>
    </section>
  );
};

export default Appointment;
