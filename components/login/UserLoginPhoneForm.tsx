import Image from "next/image";
import React, { ChangeEvent, ReactElement, useState } from "react";
import { FormTypes, FormValidateTypes } from "../appointment/AppointmentPhoneInput";
import { Field, Form, Formik, FormikState } from "formik";

const UserLoginPhoneForm = ({
  phoneNumber,
  setStep,
  setCode,
}: {
  phoneNumber: {
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
  };
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [inputCode, setInputCode] = useState("");

  const initialValue: FormTypes = {
    phone: phoneNumber.phone,
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
  const handleSubmit = async (value: FormTypes) => {
    let digits = String(Math.floor(Math.random() * 100000));
    while (digits.length !== 5) {
      digits = String(Math.floor(Math.random() * 100000));
    }
    setCode(digits);
    setStep(1);
    phoneNumber.setPhone(value.phone)
    
  };
  return (
    <Formik
      validate={validate}
      initialValues={initialValue}
      onSubmit={(value) => handleSubmit(value)}
    >
      {({ isSubmitting, errors, touched, values }: FormikState<FormTypes>) => (
        <Form>
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
        </Form>
      )}
    </Formik>
  );
};

export default UserLoginPhoneForm;
