import { glassStyle } from "@/public/styles/style";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Doctor from "@/public/assets/images/doctor-login-min.png";
const Input = styled.input``;
const Login = () => {
  return (
    <section className="flex w-full h-screen relative items-center justify-center md:justify-between bg-gray-100">
      <div className="hidden md:flex w-2/3 items-center relative h-full bg-primary rounded-tr-[30px] rounded-br-[30px]">
        <div className="flex flex-col w-full items-center ml-4 mr-20">
          <div className="flex flex-col w-full">
            <h3 className="text-center font-extrabold text-3xl text-white mb-5">Welcome to Login page</h3>
          </div>
          <Image src={Doctor} alt="Image" width={200} height={200} />
        </div>

      </div>
        <form className="flex min-w-[250px] max-w-[400px] w-full mx-3 md:w-1/3 flex-col md:-translate-x-1/2 rounded-xl p-8 bg-white">
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
          <button
            type="submit"
            className="w-full rounded-xl bg-primary text-white py-2 px-3 mt-5 shadow-lg shadow-[#]"
          >
            Login | Register
          </button>
        </form>
    </section>
  );
};

export default Login;
