import React, {
  ChangeEvent,
  FormEventHandler,
  KeyboardEvent,
  useEffect,
  useState,
  useRef,
} from "react";
import SplitedInputs from "./SplitedInputs";
import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type UserLastReserveType = {
    firstName: string;
    lastName: string;
    idNumber: string;
    reservedTime: number;
    submitTime : number
}
type UserType = {
  id: number;
  phone: string;
  reservesList : UserLastReserveType[];
};
const AppointmentRegisterCode = ({
  sectionSelected,
  setSectionSelected,
  reserveStates,
}: SectionConfigType) => {
  const [stringCode, setStringCode] = useState<string>("");
  const [submitStatus, setSubmitStatus] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toast("your code is : " + reserveStates.reserveData.authDigits, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, []);

  useEffect(() => {
    setError("");
  }, [stringCode]);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const getAllData :UserType[] = await fetch(`http://localhost:3004/users`)
      .then((resp) => resp)
      .then((resp) => resp.json());
    const findUser = getAllData.filter(value => value.phone === reserveStates.reserveData.phone)
    if (findUser.length) {
      const { id, reservesList } = findUser[0];
      reserveStates.setReserveData((prev) => {
        if(reservesList){
          return {
            ...prev,
            id,
            reservesList,
          };
        }else{
          return {
            ...prev,
            id,
            lastReservation : []
          };
        }
      });
    } else {
      reserveStates.setReserveData((prev) => {
        return { ...prev, id: getAllData.length + 1 , reservesList : [] };
      });
    }
    stringCode === reserveStates.reserveData.authDigits
      ? setSectionSelected(2)
      : setError("code is not correct");
  };

  return (
    <>
      <ToastContainer style={{ zIndex: 1000, marginTop: 70 }} limit={1} />
      <div
        ref={containerRef}
        style={{ ...glassStyle }}
        className={`flex w-fit flex-col items-center rounded-2xl text-text transition-all duration-200 p-5`}
      >
        <p className="w-full text-center text-text font-bold mb-5">
          Enter the code that sent to{" "}
          <span className="text-[green] font-medium text-sm">
            {reserveStates.reserveData.phone}
          </span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-full"
        >
          <div className="flex w-full justify-center items-center">
            <SplitedInputs
              setSubmitStatus={setSubmitStatus}
              inputsNumber={5}
              setStringCode={setStringCode}
            />
          </div>
          <span className="flex w-full justify-center items-center text-red-500">
            {error}
          </span>
          <div className="flex w-full justify-between items-center mt-6">
            <button
              className="w-fit text-sm font-bold mt-5"
              type="button"
              onClick={() => setSectionSelected(0)}
            >
              Edit number
            </button>
            <button
              type="submit"
              disabled={submitStatus}
              className="opacity-100 disabled:opacity-70 rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppointmentRegisterCode;
