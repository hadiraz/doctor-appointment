import React, { FormEventHandler, useEffect, useState } from "react";
import SplitedInputs from "../multipleInputs/SplitedInputs";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import {atom, useRecoilState} from 'recoil';
import { ClipLoader } from "react-spinners";

const UserLoginCode = ({
  phoneNumber,
  setStep,
  code,
}: {
  phoneNumber: {
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
  };
  code: { code: string; setCode: React.Dispatch<React.SetStateAction<string>> };
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const router = useRouter();
  const [loading , setLoading] = useState(false)
  const [codeSubmit, setCodeSubmit] = useState(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true)
    const sendData = await fetch("/api/user/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phoneNumber.phone }),
    });
    setLoading(false)
    if (sendData.status === 200) {
      router.replace("/user/dashboard");
    } else {
      toast.error(`Something went wrong`, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  useEffect(() => {
    code.code.length === 5 &&
      toast(`Your code is: ${code.code}`, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }, [code]);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col items-center"
    >
      <h4 className="w-full font-bold text-center mb-4">Nikan Hospital</h4>
      <p className="mb-4 w-full text-left">
        Code sent to
        <span className="text-sm text-primary font-semibold ml-1">
          {phoneNumber.phone}
        </span>
      </p>
      <SplitedInputs
        setSubmitStatus={setCodeSubmit}
        setStringCode={code.setCode}
        inputsNumber={5}
      />
      <div className="flex w-full mt-5">
        <button
          onClick={() => setStep(0)}
          type="button"
          className={`w-full transition-all duration-150 rounded-xl py-2 px-3 mt-5 mr-3 text-gray-500`}
        >
          Back
        </button>
        <button
          type="submit"
          disabled={codeSubmit}
          className={`w-full transition-all duration-150 rounded-xl bg-primary text-white py-2 px-3 mt-5 shadow-lg ml-3 ${
            codeSubmit ? "opacity-70" : "opacity-100"
          }`}
        >
          {loading ? <ClipLoader size={32} /> : "Enter"} 
        </button>
      </div>
    </form>
  );
};

export default UserLoginCode;
