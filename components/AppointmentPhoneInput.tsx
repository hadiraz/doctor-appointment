import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";
import React, { FormEventHandler } from "react";
import styled from "styled-components";

const AppointmentPhoneInput = ({sectionSelected , setSectionSelected} : SectionConfigType) => {
  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
    setSectionSelected(1)
  }
  return (
    <form  style={{...glassStyle}} onSubmit={handleSubmit} className={`flex w-fit md:w-3/4 flex-col justify-center items-center rounded-2xl  p-8 text-text bg-transparent h-fit`}>
      <p className="text-text mb-5 font-bold">Please enter your phone number</p>
      <input
       style={{boxShadow : "0px 0px 12px -2px #ccc" , background : "#ffffff5b"}} 
        type="tel"
        maxLength={12}
        minLength={12}
        className="max-w-[250px] w-full px-2 py-2 border-none outline-none border-gray-400 bg-transparent rounded-xl"
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
