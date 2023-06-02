import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";
import React, { ChangeEvent, ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { useFormik, Formik, Form, Field, FormikState } from "formik";
type FormTypes = {
  firstName: string;
  lastName: string;
  idNumber: string;
};
type FormValidateTypes = {
  firstName?: string;
  lastName?: string;
  idNumber?: string;
};

const AppointmentInformation = ({
  sectionSelected,
  setSectionSelected,
}: SectionConfigType) => {
  const initialValue: FormTypes = {
    firstName: "",
    lastName: "",
    idNumber: "",
  };
  const validate = (values: FormTypes) => {
    const errors: FormValidateTypes = {};
    if (!values.firstName) {
      errors.firstName = "first name required";
    } else if (values.firstName.length < 3) {
      errors.firstName = "first name must be longer";
    }else if (!/\w/.test(values.firstName)) {
      errors.firstName = "please enter valid characters";
    }
    if (!values.lastName) {
      errors.lastName = "last name required";
    } else if (values.lastName.length < 3) {
      errors.lastName = "last name must be longer";
    }else if (!/\w/.test(values.lastName)) {
      errors.lastName = "please enter valid characters";
    }
    if (!values.idNumber) {
      errors.idNumber = "id number required";
    } else if (values.idNumber.length < 3) {
      errors.idNumber = "id number is not correct";
    }else if (!/\d+/.test(values.idNumber)) {
      errors.idNumber = "please enter valid characters";
    }
    return errors;
  };
  const handleSubmit = () => {
    setSectionSelected(3);
  };

  return (
    <Formik
      validate={validate}
      initialValues={initialValue}
      onSubmit={handleSubmit}
      
    >
      {({ isSubmitting, errors, touched, handleChange , values }) => {console.log(errors);return (
        <Form
          style={{ ...glassStyle }}
          className="flex px-3 w-full md:w-2/3 flex-col items-center rounded-2xl py-5 text-text transition-all duration-200 "
        >
          <p className="txt-text font-semibold mb-10">
            Please enter patient information
          </p>
          <div className="flex flex-col justify-start items-end  my-5">
            <label
              htmlFor="form-name"
              className="flex w-full text-text font-bold capitalize mb-3"
            >
              first name
            </label>
            <Field
              style={{ ...glassStyle }}
              id="form-name"
              name="firstName"
              placeholder="john"
              className="max-w-[250px] w-full p-1 px-2 outline-none bg-transparent focus:border-[green] border-[1px] rounded-md"
              
              // value={values.firstName}
            />
            <span className="flex w-full text-red-600 justify-center text-sm mt-1">
              {touched.firstName && errors.firstName}
            </span>
          </div>
          <div className="flex flex-col justify-start items-end  my-5">
            <label
              htmlFor="form-last-name"
              className="flex w-full text-text font-bold capitalize mb-3"
            >
              last name
            </label>
            <Field
              style={{ ...glassStyle }}
              id="form-last-name"
              name="lastName"
              placeholder="smith"
              className="max-w-[250px] w-full p-1 px-2 outline-none bg-transparent focus:border-[green] border-[1px] rounded-md"
              // value={values.lastName}
            />
            <span className="flex w-full text-red-600 justify-center text-sm mt-1">
              {touched.lastName && errors.lastName}
            </span>
          </div>
          <div className="flex flex-col justify-start items-end  my-5">
            <label
              htmlFor="form-id-number"
              className="flex w-full text-text font-bold capitalize mb-3"
            >
              id number
            </label>
            <Field
              style={{ ...glassStyle }}
              name="idNumber"
              id="form-id-number"
              placeholder="0023336589"
              className="max-w-[250px] w-full p-1 px-2 outline-none bg-transparent focus:border-[green] border-[1px] rounded-md"
              // value={values.idNumber}
            />
            <span className="flex w-full text-red-600 justify-center text-sm mt-1">
              {touched.idNumber && errors.idNumber}
            </span>
          </div>

          <div className="flex w-full justify-end items-center mt-6">
            <button disabled={isSubmitting || errors.firstName || errors.lastName || errors.idNumber ? true :false} className=" disabled:opacity-70 rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg">
              Next
            </button>
          </div>
        </Form>
      )}}
    </Formik>
  );
};

export default AppointmentInformation;
