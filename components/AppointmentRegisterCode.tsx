import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

const AppointmentRegisterCode = () => {
  const [stringCode, setStringCode] = useState<string>("");

  const splitCode = (id?: number) => {
    const array = stringCode.split("");
    if (id) {
      return array[id];
    }
  };
 
  const setCodeDigit = (inputValue : string , id : number) => {
    setStringCode((prev) => {
      const newArrayCode = prev.split("").map((value, key) => {
        if (key === id) {
          return inputValue;
        }else return value
      });
      return newArrayCode.join("");
    });
  }

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const enteredCharacter: string = e.target.value.split("")[0];
    const nextSibling = e.target.nextElementSibling as HTMLInputElement | null;
    const checkDigit = /\d/.test(enteredCharacter);
    if (checkDigit) {
        stringCode.length === 3 ? setCodeDigit(enteredCharacter , id) : setStringCode(prev => prev + enteredCharacter)
        nextSibling?.focus();
    }
  };

  const inputKeyDownHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    const target = e.target as HTMLInputElement | null;
    if (target && e.key === "Backspace") {
      const prevSibling =
        target.previousElementSibling as HTMLInputElement | null;
      setCodeDigit(" " , id)
      prevSibling && prevSibling.focus();
      return;
    }
  };

  return (
    <div className="flex w-full flex-col items-center rounded-2xl  py-5 text-text shadow-lg">
      <p className="w-full text-center text-text font-bold mb-5">
        Enter the code that sent to your number
      </p>
      <form className="flex flex-col justify-center items-center w-full">
        <div className="flex w-full justify-center items-center">
          {[1, 2, 3].map((value, key) => {
            const splitedStringCode = stringCode.split("")[key];
            return (
              <input
                onChange={(e) => inputChangeHandler(e, key)}
                onKeyDown={(e) => inputKeyDownHandler(e, key)}
                value={Number(splitedStringCode) ? splitedStringCode : ""}
                key={key}
                inputMode="numeric"
                type="text"
                maxLength={1}
                autoComplete="one-time-code"
                pattern="\d{1}"
                className="border-b-text text-lg bg-transparent w-6 text-center appearance-none mx-1 flex items-center justify-center border-b-[1px] outline-none border-gray-400 focus:border-b-emerald-300 focus:border-b-[2px]"
              />
            );
          })}
        </div>
        <div className="flex w-full justify-end items-center mt-6 px-5">
          <button className="rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentRegisterCode;
