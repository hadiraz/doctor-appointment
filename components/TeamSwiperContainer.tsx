import React from "react";
import SwiperComponent from "./SwiperComponent";
import TeamSwiperItems from "./TeamSwiperItems";

const TeamSwiperContainer = () => {
  return (
    <div
      className="flex items-center justify-center p-3 h-max rounded-3xl mt-8 lg:mt-0"
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
  );
};

export default TeamSwiperContainer;
