import AppointmentForm from "@/components/AppointmentForm";
import AppointmentInformation from "@/components/AppointmentInformation";
import AppointmentPhoneInput from "@/components/AppointmentPhoneInput";
import AppointmentRegisterCode from "@/components/AppointmentRegisterCode";
import React, { useState } from "react";
export type SectionConfigType = {
  sectionSelected :number ,
  setSectionSelected : React.Dispatch<React.SetStateAction<number>>
}
const Appointment = () => {
  const [sectionSelected, setSectionSelected] = useState<number>(0);
  return (
    <section className="flex flex-col items-center w-full sm:max-w-2xl min-h-screen bg-transparent rounded-xl px-2 relative z-[2]">
      <div className="flex w-full items-center">
        <div className="flex flex-col items-center justify-center relative">
          <span className="flex items-center justify-center bg-primary rounded-full py-2 px-4 text-white">
            1
          </span>
          <span className="flex font-bold text-sm capitalize mt-3">
            register
          </span>
        </div>
        <span className="flex h-[3px] w-full bg-gray-400 relative -top-4"></span>
        <div className="flex flex-col items-center justify-center relative">
          <span className="flex items-center justify-center bg-primary rounded-full py-2 px-4 text-white">
            2
          </span>
          <span className="flex font-bold text-sm capitalize mt-3">
            register
          </span>
        </div>
        <span className="flex h-[3px] w-full bg-gray-400 relative -top-4"></span>
        <div className="flex flex-col items-center justify-center relative">
          <span className="flex items-center justify-center bg-primary rounded-full py-2 px-4 text-white">
            1
          </span>
          <span className="flex font-bold text-sm capitalize mt-3">
            register
          </span>
        </div>
      </div>
      <div style={{background: "linear-gradient(135deg, rgba(123,255,123,1) 0%, rgba(197,255,253,1) 100%)" }} className="flex w-full min-h-[300px] p-3 relative items-center rounded-2xl shadow-xl mt-10 justify-center">
        {sectionSelected === 0 && <AppointmentPhoneInput sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />}
        {sectionSelected === 1 && <AppointmentRegisterCode sectionSelected={sectionSelected} setSectionSelected={setSectionSelected}  />}
        {sectionSelected === 2 && <AppointmentInformation sectionSelected={sectionSelected} setSectionSelected={setSectionSelected}  />}
        {sectionSelected === 3 && <AppointmentForm sectionSelected={sectionSelected} setSectionSelected={setSectionSelected}  />}
      </div>
    </section>
  );
};

export default Appointment;
