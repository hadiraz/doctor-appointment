import React, {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
type InputsConfig = {
  inputsNumber: number;
  stringCode: string;
  setStringCode: React.Dispatch<React.SetStateAction<string>>;
  setSubmitStatus: React.Dispatch<React.SetStateAction<boolean>>;
};
const SplitedInputs = ({
  inputsNumber,
  stringCode,
  setStringCode,
  setSubmitStatus
}: InputsConfig) => {
  const [items, setItems] = useState<{id : number , value :string}[]>([]);
  const [pasteStatus, setPasteStatus] = useState<boolean>(false);
  const [filledInputs, setFilledInputs] = useState<number>(0);
  const FirstInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    let newArr: {id : number , value :string}[] = [];
    for (let i = 0; i < inputsNumber; i++) {
      newArr[i] = {id : i , value : ""};
    }
    setItems(newArr);
  }, [inputsNumber]);

  useEffect(() => {
    setStringCode(items.join(""))
    items.map((value , key)=>{
      if(value.value !== "" && value.value !== " "){
        setFilledInputs(prev => prev + 1)
      }else  setFilledInputs(0) 
    })
  }, [items]);

  useEffect(()=>{
    filledInputs === items.length ? setSubmitStatus(false) : setSubmitStatus(true)
  },[filledInputs])

  useEffect(() => {
    items.length > 0 && FirstInputRef.current?.focus();
  }, [items.length]);

  const setCodeDigit = (inputValue: string, inputId: number) => {
    setItems(prev => {
      const newItems = prev.map(({value , id}, key) => {
        if (id === inputId) {
          return {id , value : inputValue}
        }else return {id , value} 
      });
      return newItems
    })
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    if(items.length <= inputsNumber && !pasteStatus && e.target.value.length < 2) {checkDigits(e.target.value , id , e)}
  };
  const checkDigits = ( digit: string , id: number, e?: ChangeEvent<HTMLInputElement> ) => {
    let enteredCharacter: string = digit;
      const checkDigit = /\d/.test(enteredCharacter);
      let nextSiblingElement : HTMLInputElement | null = null ;
      if (e) {
        nextSiblingElement = e.target.nextElementSibling as HTMLInputElement | null ;
      }
      if (!checkDigit) {
        enteredCharacter = ""
      }
      digit && setCodeDigit(enteredCharacter, id);
      if(checkDigit) nextSiblingElement?.focus();
    };

  const inputKeyDownHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    const target = e.target as HTMLInputElement | null;
    const nextElement = target?.nextElementSibling as HTMLInputElement | null;
    if (e.key !== "Backspace" && String(target?.value) && String(!nextElement?.value) ) {
      nextElement?.focus();
    }
    if (target && e.key === "Backspace") {
      const prevSibling = target.previousElementSibling as HTMLInputElement | null;
      setCodeDigit("", id);
      if(!target.value && id > 0) setCodeDigit("" , id-1)
      if(!target.value && id === 0) setCodeDigit("" , id)
      prevSibling && prevSibling.focus();
    }
  };

  const inputPasteHandler = (e: ClipboardEvent<HTMLInputElement>) => {
    if (e.clipboardData && e.clipboardData.getData("text").length === items.length ) {
      setPasteStatus(true)
      const enteredData = e.clipboardData.getData("text");
      enteredData.split("").forEach((value,index)=>{
        checkDigits(value , index)
        index === items.length - 1 && setPasteStatus(false)
      })

    }
  };
  return (
    <>
      {items.map(({value , id}, key) => {
        if (key === 0) {
          return (
            <input
              ref={FirstInputRef}
              onChange={(e) => inputChangeHandler(e, id)}
              onKeyDown={(e) => inputKeyDownHandler(e, id)}
              onPaste={(e) => inputPasteHandler(e)}
              value={value}
              key={id}
              inputMode="numeric"
              type="text"
              autoComplete="one-time-code"
              className="border-b-text text-lg bg-transparent w-6 text-center appearance-none mx-1 flex items-center justify-center border-b-[1px] outline-none border-gray-400 focus:border-b-emerald-300 focus:border-b-[2px]"
            />
          );
        } else {
          return (
            <input
              onChange={(e) => inputChangeHandler(e, id)}
              onKeyDown={(e) => inputKeyDownHandler(e, id)}
              value={value}
              key={id}
              inputMode="numeric"
              type="text"
              autoComplete="one-time-code"
              className="border-b-text text-lg bg-transparent w-6 text-center appearance-none mx-1 flex items-center justify-center border-b-[1px] outline-none border-gray-400 focus:border-b-emerald-300 focus:border-b-[2px]"
            />
          );
        }
      })}
    </>
  );
};

export default SplitedInputs;
