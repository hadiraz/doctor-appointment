import React from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 250px;
  border: #888888;
`;
const AppointmentPhoneInput = () => {
  return (
    <form className="flex w-full flex-col justify-center items-center rounded-2xl  p-4 text-text shadow-lg">
      <p className="text-text mb-3">Please enter your phone number</p>
      <input
        type="tel"
        className="max-w-[250px] w-full px-2 py-1 border-b-[1px] outline-none border-gray-400 focus:border-b-emerald-300 focus:border-b-[2px]"
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
