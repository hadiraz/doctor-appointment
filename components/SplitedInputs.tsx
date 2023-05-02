import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
type InputsConfig = {
  inputsNumber: number;
  stringCode: string;
  setStringCode: React.Dispatch<React.SetStateAction<string>>;
};
const SplitedInputs = ({
  inputsNumber,
  stringCode,
  setStringCode,
}: InputsConfig) => {
  const [items, setItems] = useState<number[]>([]);
  const FirstInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    let newArr: number[] = [];
    for (let i = 0; i < inputsNumber; i++) {
      newArr[i] = i;
    }
    setItems(newArr);
}, [inputsNumber]);
useEffect(() => {
    FirstInputRef.current?.focus();
  }, [items]);
  const setCodeDigit = (inputValue: string, id: number) => {
    setStringCode((prev) => {
      const newArrayCode = prev.split("").map((value, key) => {
        if (key === id) {
          return inputValue;
        } else return value;
      });
      return newArrayCode.join("");
    });
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    console.log("hi");
    const enteredCharacter: string = e.target.value.split("")[0];
    const nextSibling = e.target.nextElementSibling as HTMLInputElement | null;
    const checkDigit = /\d/.test(enteredCharacter);
    if (checkDigit) {
      stringCode.length === inputsNumber
        ? setCodeDigit(enteredCharacter, id)
        : setStringCode((prev) => prev + enteredCharacter);
      nextSibling?.focus();
    }
  };

  const inputKeyDownHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    const target = e.target as HTMLInputElement | null;
    const nextElement = target?.nextElementSibling as HTMLInputElement | null;
    if (e.key !== "Backspace" && target?.value && !nextElement?.value) {
      nextElement?.focus();
    }
    if (target && e.key === "Backspace") {
      const prevSibling =
        target.previousElementSibling as HTMLInputElement | null;
      setCodeDigit(" ", id);
      prevSibling && prevSibling.focus();
      return;
    }
  };
  return (
    <>
      {items.map((value, key) => {
        const splitedStringCode = stringCode.split("")[key];
        if (key === 0) {
          return (
            <input
              
              ref={FirstInputRef}
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
        
        } else {
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
        }
      })}
    </>
  );
};

export default SplitedInputs;
