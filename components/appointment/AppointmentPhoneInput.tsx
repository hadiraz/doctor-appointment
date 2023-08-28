import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";
import { useFormik, Formik, Form, Field , FormikState } from "formik";
import React, { FormEventHandler } from "react";
import styled from "styled-components";

export type FormTypes = {
  phone: string;
};
export type FormValidateTypes = {
  phone ?: string;
};

const AppointmentPhoneInput = ({
  sectionSelected,
  setSectionSelected,
  reserveStates
}: SectionConfigType) => {
  const initialValue: FormTypes = {
    phone: reserveStates.reserveData.phone,
  };

  const validate = (values: FormTypes) => {
    const errors: FormValidateTypes = {

    };
    if (!values.phone) {
      errors.phone = "phone number required";
    } else if (values.phone.length !== 11 || !/^09\d/.test(values.phone)) {
      errors.phone = "phone number is not correct";
    }
    return errors
  };
  const handleSubmit = (value : FormTypes) => {
    let digits = String(Math.floor(Math.random()*100000));
    while (digits.length !== 5){
      digits = String(Math.floor(Math.random()*100000));
    }
    reserveStates.setReserveData({...reserveStates.reserveData , phone : value.phone , authDigits : digits})
    setSectionSelected(1);
  };
  return (
    <Formik
      validate={validate}
      initialValues={initialValue}
      // onSubmit={}
      onSubmit={(value) => handleSubmit(value)}
    >
      {({isSubmitting , errors , touched } : FormikState<FormTypes>)=>(
      <Form
        style={{ ...glassStyle }}
        className={`flex w-fit md:w-3/4 flex-col justify-center items-center rounded-2xl p-8 text-text bg-transparent h-fit`}
      >
        <p className="text-text mb-5 font-bold">
          Please enter your phone number
        </p>
        <Field
          type="tel"
          name="phone"
          maxLength={11}
          minLength={11}
          className="max-w-[250px] w-full px-2 py-2 outline-none border-b-[1px] border-b-gray-400 bg-transparent focus:border-b-primary focus:border-b-[2px]"
          placeholder="09123456789"
        />
        <span className="flex w-full text-red-600 justify-center text-sm mt-1">{touched.phone && errors.phone}</span>
        <div className="flex w-full justify-end items-center">
          <button disabled={isSubmitting} type="submit" className=" disabled:opacity-[0.7] rounded-2xl px-5 py-2 bg-buttons w-fit text-white mt-5 shadow-lg">
            Next
          </button>
        </div>
      </Form>
      )}
    </Formik>
  );
};

export default AppointmentPhoneInput;
