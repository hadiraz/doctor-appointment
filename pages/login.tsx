import { glassStyle } from "@/public/styles/style";
import React from "react";
import styled from "styled-components";

const Input = styled.input`
  
`;
const Login = () => {
  return (
    <section className="flex w-full h-screen relative items-center justify-between bg-gray-100">
      <div className="flex w-2/3 justify-end items-center relative h-full bg-primary rounded-tr-[30px] rounded-br-[30px]">
        <form className="flex min-w-[250px] w-2/5 flex-col absolute translate-x-1/2 rounded-xl p-8 bg-white">
          <h4 className="font-extrabold text-lg w-full text-center mb-5">
            Nikan Nuclear
          </h4>
          <p className="font-semibold text-sm mb-3">Login | Register</p>
          <p className="text-sm mb-5 text-gray-500 mt-3">
            Hi,
            <br />
            Please enter your phone number
          </p>
          <div className="flex flex-col relative justify-center">
            <Input
              id="phone"
              type="tel"
              className="flex w-full transition-all duration-150 h-full focus:shadow-lg rounded-lg py-2 px-2 outline-none group border border-[#ccc] focus:border-primary relative"
            />
            <label
              htmlFor="phone"
              className="flex text-gray-500 bg-white transition-all duration-150 ml-2 -top-[9px] px-[0.1rem] text-xs absolute cursor-text z-[1]"
            >
              Phone number
            </label>
          </div>
          <button type="submit" className="w-full rounded-xl bg-primary text-white py-2 px-3 mt-5 shadow-lg shadow-[#]">
            Login | Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
