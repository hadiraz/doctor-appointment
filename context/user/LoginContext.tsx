import { AppointmentDataType } from "@/components/appointment/AppointmentForm";
import React, { ReactNode, createContext, useReducer } from "react";

type LoginContextType = {
  _id: object | null;
  phone: string;
  OTP_code: string;
  OTP_EXP: number;
  dispatch: React.Dispatch<Action>;
};
type Action = {
  type: string;
  payload ?: {
    _id?: object | null;
    phone?: string;
    OTP_code?: string;
    OTP_EXP?: number;
  } ;
};
export const AppointmentCreateContext = createContext<LoginContextType | null>(null);
const initialState: LoginContextType = {
  _id : null,
  phone: "",
  OTP_code: "",
  OTP_EXP: 0,
  dispatch: () => {},
};
const reducer : React.Reducer<LoginContextType , Action> = (
  state: LoginContextType = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case "SET_PHONE":
      if (payload?.phone) return{ ...state, phone : payload.phone };
    case "SET_OTP":
      if(payload?.OTP_code && payload?.OTP_EXP) return{ ...state, OTP_code : payload.OTP_code , OTP_EXP : payload.OTP_EXP };
    case "SET_ID":
      if(payload?._id) return { ...state, _id : payload._id };
    case "REMOVE_PHONE":
      return { ...state, phone : "" };
    case "REMOVE_OTP":
      return { ...state, OTP_code : "" , OTP_EXP : 0 };
    case "REMOVE_ID":
      return { ...state , _id : null };
    default:
      return state;
  }
};

const AppointmentContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppointmentCreateContext.Provider value={{ ...state , dispatch }}>
      {children}
    </AppointmentCreateContext.Provider>
  );
};

export default AppointmentContext;

export const setPhoneNumberContext = (action : Action)=>{
  reducer(initialState , action)
}
