import { connectToDatabase } from "@/lib/mongodb";
import { SectionConfigType } from "@/pages/appointment";
import { glassStyle } from "@/public/styles/style";
import { Document, FindCursor, ObjectId, WithId } from "mongodb";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { start } from "repl";
import { v4 as uuidv4 } from "uuid";

export type AppointmentDataType = {
  _id?: ObjectId;
  timeSettings: {
    startTime: number;
    endTime: number;
    step: number;
    offDays: number[] | null;
  };
  reservedTimes: string[] | null;
};
type DateObjectType = {
  day: number;
  time: number;
  date: string;
};
type SelectedTimeType = {
  date: number;
  time: number;
};

const AppointmentForm = ({
  sectionSelected,
  setSectionSelected,
  reserveStates,
}: SectionConfigType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<SelectedTimeType>({
    date: 0,
    time: 0,
  });
  const [daysList, setDaysList] = useState<DateObjectType[]>([]);
  const [timeList, setTimeList] = useState<number[]>([]);
  const [data, setData] = useState<AppointmentDataType>({
    timeSettings: {
      startTime: 0,
      endTime: 0,
      step: 0,
      offDays: null,
    },
    reservedTimes: null,
  });
  const [currentTime, setCurrentTime] = useState<number>(0);
  useEffect(() => {
    (async () => {
      const getData: AppointmentDataType[] = await fetch(
        "http://localhost:3000/api/appointment/timeSettings"
      )
        .then((res) => res)
        .then((res) => res.json());

      setData(getData[0]);

      /** generate the start day time "00:00" in millisecond */
      const date = new Date();
      const time = date.getTime();
      const hourToMilSec = date.getHours() * 60 * 60 * 1000;
      const minToMilSec = date.getMinutes() * 60 * 1000;
      const secToMilSec = date.getSeconds() * 1000;
      const result =
        time -
        (hourToMilSec + minToMilSec + secToMilSec + date.getMilliseconds());
      setCurrentTime(result);
    })();
  }, []);
  useEffect(() => {
    if (data.timeSettings.step && currentTime) {
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
        setDaysList(days);
      };
      daysCounter();
    }
  }, [data.timeSettings.step && currentTime]);
  const formatDate = (value : string) => {
    const formattedDate = new Date(value).toLocaleString('en-US', {
      timeZone: 'your-desired-timezone',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    return formattedDate
  }
  const timeCounter = (date: number) => {
    const startTime = date + data.timeSettings.startTime * 60 * 60 * 1000;
    const endTime = date + data.timeSettings.endTime * 60 * 60 * 1000;
    let round = 0;
    let newTime = 0;
    let list: number[] = [];
    while (endTime > newTime) {
      newTime = startTime + (round * data.timeSettings.step * 60 * 1000);
      const newTimeISO = new Date(newTime).toISOString();
        if(!data.reservedTimes?.includes(newTimeISO)){
          list.push(newTime);
        }
      round ++
    }
    setTimeList(list);
  };

  useEffect(() => {
    timeCounter(selectedDate.date);
  }, [selectedDate.date]);

  const handleDaySelect = (timeObj: DateObjectType) => {
    setSelectedDate({ date: timeObj.time, time: 0 });
  };
  const handleTimeSelect = (time: number) => {
    setSelectedDate((prev) => ({ date: prev.date, time }));
  };
  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const { reserveData } = reserveStates;
    const {
      id,
      firstName,
      lastName,
      phone,
      idNumber,
      reservedDate,
      authDigits,
      reservesList,
    } = reserveData;

    reserveStates.reserveData.reservedDate &&
      reserveStates.setReserveData({
        ...reserveStates.reserveData,
        reservedDate: selectedDate.time,
      });

    const sendReserveData = await fetch("/api/appointment/setAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reservedTimes: {
          data: new Date(selectedDate.time),
          id: data?._id,
        },
        userData: {
          phone,
          reservesList:
            {
              firstName,
              lastName,
              idNumber,
              submitTime: new Date(),
              reservedTime: new Date(selectedDate.time),
            },
        },
      }),
    });
    sendReserveData.status === 200
      ? setSectionSelected(4)
      : toast.error("something went wrong!", {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex px-3 w-full flex-col items-center rounded-2xl py-5 text-text transition-all duration-200 `}
    >
      <ToastContainer style={{ zIndex: 1000, marginTop: 70 }} limit={1} />
      <div
        style={{ ...glassStyle }}
        className="flex w-fit max-w-full rounded-3xl relative z-[2] backdrop-blur-md py-1 overflow-hidden"
      >
        {/* <span className="flex absolute w-8 backdrop-blur-sm h-full right-[-8px] top-0 z-[1]"></span> */}
        <Scrollbars
          autoHeight
          autoHeightMax={90}
          autoHeightMin={65}
          className="flex !w-full !flex-row"
          style={{ width: "300px", display: "flex", flexDirection: "row" }}
        >
          <div className="flex !flex-row min-w-[500px] w-full h-full items-center py-1 mx-2">
            {daysList.map((value, key) => {
              return (
                <div
                  onClick={() => {
                    handleDaySelect(value);
                  }}
                  key={uuidv4()}
                  className={`flex flex-col min-w-40 h-16 justify-center items-center px-4 py-2 ${
                    selectedDate.date === value.time
                      ? "bg-primary border-white border-[2px] text-white"
                      : "text-text"
                  } rounded-lg cursor-pointer transition-all duration-200`}
                >
                  <p
                    className={`${
                      selectedDate.date === value.time
                        ? "font-extrabold text-sm"
                        : "font-semibold text-center  text-xs"
                    } capitalize mb-1`}
                  >
                    {new Date(value.date).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </p>
                  <p
                    className={`${
                      selectedDate.date === value.time
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
        </Scrollbars>
      </div>
      <div className="grid grid-cols-1 2xs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 w-fit flex-wrap mt-5">
        {timeList.map((value, key) => {
          const startDate = new Date(value);
          const endDate = new Date(value + data.timeSettings.step * 60 * 1000);
          if (startDate.getHours() < data.timeSettings.endTime) {
            return (
              <div
                key={uuidv4()}
                onClick={() => handleTimeSelect(value)}
                style={{ ...glassStyle }}
                className={`w-[100px] h-[45px] flex items-center justify-center rounded-2xl ${
                  selectedDate.time === value
                    ? "border-white border-[2px] !bg-primary text-white font-bold"
                    : "text-text"
                } cursor-pointer transition-all duration-200 text-sm`}
              >
                {`${startDate.getHours()}${
                  startDate.getMinutes() ? ":" + startDate.getMinutes() : ""
                } - ${endDate.getHours()}${
                  endDate.getMinutes() ? ":" + endDate.getMinutes() : ""
                }`}
              </div>
            );
          }
        })}
      </div>
      <div className="flex w-full justify-between items-center mt-6">
        <button
          onClick={() => setSectionSelected((prev) => prev - 1)}
          className="rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg"
        >
          Back
        </button>
        <button
          disabled={!selectedDate.date || !selectedDate.time ? true : false}
          className=" disabled:opacity-70 opacity-100 rounded-2xl font-bold px-5 py-2 bg-primary w-fit text-white mt-5 shadow-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default AppointmentForm;
