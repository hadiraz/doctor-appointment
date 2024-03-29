import React from "react";
import SwiperComponent from "./SwiperComponent";
import TeamSwiperItems from "./TeamSwiperItems";
import TitleIconContainer from "../shared/TitleIconContainer";

const TeamSwiperContainer = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full mt-28 rounded-[20px] sm:px-3">
      <div className="flex flex-col h-full justify-center items-center lg:w-[380px] w-full flex-shrink-0">
        <div className="flex w-full h-full items-center justify-center">
          <TitleIconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </TitleIconContainer>

          <p className="font-bold md:text-3xl text-text text-xl">
            Trusted{" "}
            <strong className="font-black text-green-500">Experts</strong> in
            Nuclear Medicine
          </p>
        </div>
      </div>
      <div
        className="flex items-center w-full lg:max-w-2xl justify-center p-3 h-max rounded-3xl mt-8 lg:mt-0"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgb(236, 239, 241) 0%, #fdfdfd 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <SwiperComponent
          items={[<TeamSwiperItems key={1} />, <TeamSwiperItems key={2} />]}
        />
      </div>
    </section>
  );
};

export default TeamSwiperContainer;
