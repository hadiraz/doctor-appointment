import React, { ChangeEvent, FormEventHandler, KeyboardEvent, useEffect, useState } from "react";
import SplitedInputs from "./SplitedInputs";
import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";

const AppointmentRegisterCode = ({sectionSelected , setSectionSelected} : SectionConfigType) => {
  const [stringCode, setStringCode] = useState<string>("");
 
  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
    setSectionSelected(2)
  }

  return (
    <div  style={{...glassStyle}} className={`flex w-fit flex-col items-center rounded-2xl text-text transition-all duration-200 p-5`}>
      <p className="w-full text-center text-text font-bold mb-5">
        Enter the code that sent to <span className="text-[green] font-medium text-sm">09121249945</span>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
        <div className="flex w-full justify-center items-center">
            <SplitedInputs inputsNumber={5} stringCode={stringCode} setStringCode={setStringCode} />
        </div>
        <div className="flex w-full justify-between items-center mt-6">
          <button className="w-fit text-sm font-bold mt-5"  type="button" onClick={()=>setSectionSelected(0)}>
              Edit number
          </button>
          <button className="rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentRegisterCode;
