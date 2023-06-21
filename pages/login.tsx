import { glassStyle } from "@/public/styles/style";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Doctor from "@/public/assets/images/doctor-login-min.png";
import { Field, Form, Formik, FormikState } from "formik";
import {
  FormTypes,
  FormValidateTypes,
} from "@/components/AppointmentPhoneInput";
import SplitedInputs from "@/components/SplitedInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = styled.input``;
const Login = () => {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [codeSubmit , setCodeSubmit] = useState(false)
  const initialValue: FormTypes = {
    phone: "",
  };
  const validate = (values: FormTypes) => {
    const errors: FormValidateTypes = {};
    if (!values.phone) {
      errors.phone = "phone number required";
    } else if (values.phone.length !== 11 || !/^09\d/.test(values.phone)) {
      errors.phone = "phone number is not correct";
    }
    return errors;
  };
  const handleSubmit = (value: FormTypes) => {
    let digits = String(Math.floor(Math.random() * 100000));
    while (digits.length !== 5) {
      digits = String(Math.floor(Math.random() * 100000));
    }
    setCode(digits);
    setStep(1);
  };
  useEffect(() => {
    code.length === 5 &&
      toast(`Your code is: ${code}` , {
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
    <>
      <ToastContainer style={{ zIndex: 1000, marginTop: 30 }} limit={1} />
      <Formik
        validate={validate}
        initialValues={initialValue}
        // onSubmit={}
        onSubmit={(value) => handleSubmit(value)}
      >
        {({
          isSubmitting,
          errors,
          touched,
          values,
        }: FormikState<FormTypes>) => (
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
            <Form className="flex min-w-[250px] max-w-[400px] absolute w-full mx-3 md:w-1/3 flex-col md:right-[19%] rounded-xl p-8 bg-white">
              {step === 0 && (
                <>
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
                    <Field
                      type="tel"
                      name="phone"
                      maxLength={11}
                      minLength={11}
                      placeholder="09123456789"
                      id="phone"
                      className="flex w-full transition-all duration-150 h-full focus:shadow-lg rounded-lg py-2 px-2 outline-none group border border-[#ccc] focus:border-primary relative"
                    />
                    <label
                      htmlFor="phone"
                      className="flex text-gray-500 bg-white transition-all duration-150 ml-2 -top-[9px] px-[3px] text-xs absolute cursor-text z-[1]"
                    >
                      Phone number
                    </label>
                    <span className="text-sm text-red-600">
                      {touched.phone && errors.phone}
                    </span>
                  </div>
                  <button
                    type="submit"
                    disabled={errors.phone ? true : false}
                    className={`w-full transition-all duration-150 rounded-xl ${
                      errors.phone ? "bg-[rgba(140,170,119,0.6)]" : "bg-primary"
                    } text-white py-2 px-3 mt-5 shadow-lg`}
                  >
                    Login | Register
                  </button>
                </>
              )}
              {step === 1 && (
                <div className="w-full h-full flex flex-col items-center">
                  <p className="mb-5 w-full text-left">
                    Code sent to{" "}
                    <span className="text-sm text-primary font-semibold ml-1">
                      {values.phone}
                    </span>
                  </p>
                  <SplitedInputs setSubmitStatus={setCodeSubmit} setStringCode={setCode} inputsNumber={5} />
                  <div className="flex w-full mt-5">
                    <button
                      onClick={() => setStep(0)}
                      type="button"
                      className={`w-full transition-all duration-150 rounded-xl py-2 px-3 mt-5 mr-3 text-gray-500`}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={codeSubmit}
                      className={`w-full transition-all duration-150 rounded-xl bg-primary text-white py-2 px-3 mt-5 shadow-lg ml-3 ${codeSubmit ? "opacity-70" : "opacity-100"}`}
                    >
                      Enter
                    </button>
                  </div>
                </div>
              )}
            </Form>
          </section>
        )}
      </Formik>
    </>
  );
};

export default Login;
