import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SplitedInputs from "@/components/multipleInputs/SplitedInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserLoginPhoneForm from "@/components/login/UserLoginPhoneForm";
import Doctor from "@/public/assets/images/doctor-login-min.png";
import UserLoginCode from "@/components/login/UserLoginCode";
const Login = () => {
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [codeSubmit, setCodeSubmit] = useState(false);
  
  return (
    <>
      <ToastContainer style={{ zIndex: 1000, marginTop: 30 }} limit={1} />
      <section className="flex w-full h-screen relative items-center justify-center md:justify-between bg-gray-100">
        <div className="hidden md:flex w-2/3 items-center relative h-full bg-primary rounded-tr-[30px] rounded-br-[30px]">
          <div className="flex flex-col w-full items-center ml-4 pr-20">
            <div className="flex flex-col w-full">
              <h3 className="text-center font-extrabold text-3xl text-white mb-5">
                Welcome to Login page
              </h3>
            </div>
            <Image src={Doctor} alt="Image" width={200} height={200} />
          </div>
        </div>
        <section className="flex min-w-[250px] max-w-[400px] absolute w-full mx-3 md:w-1/3 flex-col md:right-[19%] rounded-xl p-8 bg-white">
          {step === 0 && (
            <UserLoginPhoneForm
              phoneNumber={{ phone, setPhone }}
              setStep={setStep}
              setCode={setCode}
            />
          )}
          {step === 1 && (
            <UserLoginCode
              phoneNumber={{ phone, setPhone }}
              setStep={setStep}
              code={{ code, setCode }}
            />
          )}
        </section>
      </section>
    </>
  );
};

export default Login;
