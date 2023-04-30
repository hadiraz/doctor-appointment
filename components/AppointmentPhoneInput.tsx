import React from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 250px;
  border: #888888;
`;
const AppointmentPhoneInput = () => {
  return (
    <form className="flex w-full flex-col justify-center mt-14 max-w-xs">
      <p className="text-text mb-3">Please enter your phone number</p>
      <input
        type="tel"
        className="w-full px-2 py-1 rounded-xl border !border-gray-500 outline-gray-800 focus:outline focus:outline-emerald-300 focus:border-none"
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
