import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";
import React, { useEffect, useState } from "react";
import { start } from "repl";
import { v4 as uuidv4 } from "uuid";
type AppointmentDataType = {
  time: {
    startTime: number;
    endTime: number;
    step: number;
    offDays: number[];
    reservedTimes: number[];
  };
};
type DateObjectType = {
  day: number;
  time: number;
  date: string;
};
const AppointmentForm = ({
  sectionSelected,
  setSectionSelected,
}: SectionConfigType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<number>();
  const [data, setData] = useState<AppointmentDataType>();
  const [currentTime, setCurrentTime] = useState<number>(0);
  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:3004/time")
        .then((res) => res)
        .then((res) => res.json());
      setData(data);
      const date = new Date();
      const time = date.getTime();
      const hourToMilSec = date.getHours() * 60 * 60 * 1000;
      const minToMilSec = date.getHours() * 60 * 1000;
      const secToMilSec = date.getHours() * 1000;
      setCurrentTime(time - (hourToMilSec + minToMilSec + secToMilSec));
    })();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const daysCounter = () => {
    let days: DateObjectType[] = [];
    let i = 1;
    for (i; i <= 7; i++) {
      const dayString = currentTime + i * 24 * 60 * 60 * 1000;
      const dateObj = new Date(dayString);
      days[i] = {
        day: dateObj.getDay(),
        time: dateObj.getTime(),
        date: `${dateObj.getFullYear()}-${
          dateObj.getMonth() + 1
        }-${dateObj.getDate()}`,
      };
    }
    return days;
  };
  const timeCounter = () => {
    if (data) {
      const totalTime = data.time.endTime - data.time.startTime;
      let counter = 0;
      const timeList = [];
      while (counter < totalTime) {
        const hour = counter / 60 ;
        const minute = counter % 60 ;
        const newTime = minute ? `${start}`
        counter + data.time.step / 60;
      }
    }
  };
  const handleDaySelect = (timeObj: DateObjectType) => {
    setSelectedDate(timeObj.time);
  };
  const handleTimeSelect = (timeObj: DateObjectType) => {};
  return (
    <form
      className={`flex px-3 w-full flex-col items-center rounded-2xl py-5 text-text transition-all duration-200 `}
    >
      <div
        style={{ ...glassStyle }}
        className="flex w-fit max-w-full rounded-3xl relative z-[2] backdrop-blur-md overflow-hidden pl-3"
      >
        {/* <span className="flex absolute w-8 backdrop-blur-sm h-full right-[-8px] top-0 z-[1]"></span> */}
        <div className="flex w-full h-full items-center overflow-x-auto overflow-y-hidden no-scrollbar py-1 px-5">
          {daysCounter().map((value, key) => {
            return (
              <div
                onClick={() => {
                  handleDaySelect(value);
                }}
                key={uuidv4()}
                className={`flex flex-col justify-center items-center px-4 py-2 ${
                  selectedDate === value.time
                    ? "bg-primary border-white border-[2px] text-white"
                    : "text-text"
                } rounded-lg cursor-pointer transition-all duration-200`}
              >
                <p
                  className={`${
                    selectedDate === value.time
                      ? "font-extrabold text-sm"
                      : "font-semibold text-center  text-xs"
                  } capitalize mb-1`}
                >
                  sunday
                </p>
                <p
                  className={`${
                    selectedDate === value.time
                      ? "font-medium "
                      : "text-[#acacac]"
                  } text-xs text-center `}
                >
                  {value.date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-fit flex-wrap mt-5">
        <div
          style={{ ...glassStyle }}
          className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl border-white border-[2px] mx-1 my-1 font-bold text-white !bg-primary"
        >
          16-18
        </div>
        <div
          style={{
            boxShadow: "0px 0px 12px -2px #ccc",
            background: "#ffffff5b",
          }}
          className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1"
        >
          16-18
        </div>
        <div
          style={{
            boxShadow: "0px 0px 12px -2px #ccc",
            background: "#ffffff5b",
          }}
          className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1"
        >
          16-18
        </div>
        <div
          style={{
            boxShadow: "0px 0px 12px -2px #ccc",
            background: "#ffffff5b",
          }}
          className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1"
        >
          16-18
        </div>
        <div
          style={{
            boxShadow: "0px 0px 12px -2px #ccc",
            background: "#ffffff5b",
          }}
          className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1"
        >
          16-18
        </div>
        <div
          style={{
            boxShadow: "0px 0px 12px -2px #ccc",
            background: "#ffffff5b",
          }}
          className="w-[100px] h-[45px] flex items-center justify-center rounded-2xl bg-transparent backdrop-blur-md mx-1 my-1"
        >
          16-18
        </div>
      </div>
      <div className="flex w-full justify-end items-center mt-6">
        <button className="rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg">
          Next
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
