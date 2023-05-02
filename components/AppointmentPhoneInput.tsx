import { SectionConfigType } from "@/pages/appointment";
import React, { FormEventHandler } from "react";
import styled from "styled-components";

const AppointmentPhoneInput = ({sectionSelected , setSectionSelected} : SectionConfigType) => {
  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
    setSectionSelected(1)
  }
  return (
    <form onSubmit={handleSubmit} className={`flex absolute w-full flex-col justify-center items-center rounded-2xl  p-4 text-text shadow-lg`}>
      <p className="text-text mb-5 font-bold">Please enter your phone number</p>
      <input
        type="tel"
        className="max-w-[250px] w-full px-2 py-1 border-b-[1px] outline-none border-gray-400 focus:border-b-emerald-300 focus:border-b-[2px] bg-transparent"
        placeholder="09123456789"
      />
      <div className="flex w-full justify-end items-center">
        <button className="rounded-2xl px-5 py-2 bg-buttons w-fit text-white mt-5 shadow-lg">
          Next
        </button>
      </div>
    </form>
  );
};

export default AppointmentPhoneInput;
