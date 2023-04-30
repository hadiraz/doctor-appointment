import AppointmentPhoneInput from "@/components/AppointmentPhoneInput";
import React from "react";

const Appointment = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-2xl min-h-screen bg-transparent rounded-xl px-10 relative z-[2]">
      <div className="flex w-full items-center">
        <div className="flex flex-col items-center justify-center relative">
          <span className="flex items-center justify-center bg-primary rounded-full py-2 px-4 text-white">
            1
          </span>
          <span className="flex font-bold text-sm capitalize mt-3">register</span>
        </div>
        <span className="flex h-[3px] w-full bg-gray-400 relative -top-4"></span>
        <div className="flex flex-col items-center justify-center relative">
          <span className="flex items-center justify-center bg-primary rounded-full py-2 px-4 text-white">
            1
          </span>
          <span className="flex font-bold text-sm capitalize mt-3">register</span>
        </div>
        <span className="flex h-[3px] w-full bg-gray-400 relative -top-4"></span>
        <div className="flex flex-col items-center justify-center relative">
          <span className="flex items-center justify-center bg-primary rounded-full py-2 px-4 text-white">
            1
          </span>
          <span className="flex font-bold text-sm capitalize mt-3">register</span>
        </div>
      </div>
      <AppointmentPhoneInput />
    </section>
  );
};

export default Appointment;
