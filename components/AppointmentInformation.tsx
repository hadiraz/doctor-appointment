import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";
import React, { FormEventHandler, useEffect, useState } from "react";

const AppointmentInformation = ({
  sectionSelected,
  setSectionSelected,
}: SectionConfigType) => {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setSectionSelected(3);
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      style={{ ...glassStyle }}
      className="flex px-3 w-full md:w-2/3 flex-col items-center rounded-2xl py-5 text-text transition-all duration-200 "
    >
      <p className="txt-text font-semibold mb-10">
        Please fill the required fields
      </p>
      <div className="flex flex-col justify-start items-end  my-5">
        <label
          htmlFor="form-name"
          className="flex w-full text-text font-bold capitalize mb-3"
        >
          name
        </label>
        <input
          style={{ ...glassStyle }}
          id="form-name"
          placeholder="john"
          className="max-w-[250px] w-full p-1 px-2 outline-none bg-transparent focus:border-[green] border-[1px] rounded-md"
        />
      </div>
      <div className="flex flex-col justify-start items-end  my-5">
        <label
          htmlFor="form-last-name"
          className="flex w-full text-text font-bold capitalize mb-3"
        >
          last name
        </label>
        <input
          style={{ ...glassStyle }}
          id="form-last-name"
          placeholder="john"
          className="max-w-[250px] w-full p-1 px-2 outline-none bg-transparent focus:border-[green] border-[1px] rounded-md"
        />
      </div>
      <div className="flex flex-col justify-start items-end  my-5">
        <label
          htmlFor="form-id-number"
          className="flex w-full text-text font-bold capitalize mb-3"
        >
          id number
        </label>
        <input
          style={{ ...glassStyle }}
          id="form-id-number"
          placeholder="john"
          className="max-w-[250px] w-full p-1 px-2 outline-none bg-transparent focus:border-[green] border-[1px] rounded-md"
        />
      </div>

      <div className="flex w-full justify-end items-center mt-6">
        <button className="rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg">
          Next
        </button>
      </div>
    </form>
  );
};

export default AppointmentInformation;
