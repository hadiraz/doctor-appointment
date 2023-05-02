import React, { ChangeEvent, FormEventHandler, KeyboardEvent, useEffect, useState } from "react";
import SplitedInputs from "./SplitedInputs";
import { SectionConfigType } from "@/pages/appointment";

const AppointmentRegisterCode = ({sectionSelected , setSectionSelected} : SectionConfigType) => {
  const [stringCode, setStringCode] = useState<string>("");
 
  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
    setSectionSelected(2)
  }

  return (
    <div className={`flex absolute w-full flex-col items-center rounded-2xl  py-5 text-text shadow-lg transition-all duration-200`}>
      <p className="w-full text-center text-text font-bold mb-5">
        Enter the code that sent to your number
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
        <div className="flex w-full justify-center items-center">
            <SplitedInputs inputsNumber={5} stringCode={stringCode} setStringCode={setStringCode} />
        </div>
        <div className="flex w-full justify-end items-center mt-6 px-5">
          <button className="rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentRegisterCode;
