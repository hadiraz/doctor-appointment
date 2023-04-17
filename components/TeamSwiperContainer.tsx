import React from "react";
import SwiperComponent from "./SwiperComponent";
import TeamSwiperItems from "./TeamSwiperItems";

const TeamSwiperContainer = () => {
  return (
    <div
      className="flex items-center justify-center p-3 !w-full h-max mt-10"
      style={{
        background: "rgb(245,245,245)",
        background:
          "linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(244,244,244,1) 25%, rgba(233,233,233,1) 50%, rgba(244,244,244,1) 75%, rgba(245,245,245,1) 100%)",
      }}
    >
      <SwiperComponent
        items={[<TeamSwiperItems key={1} />, <TeamSwiperItems key={2} />]}
      />
    </div>
  );
};

export default TeamSwiperContainer;
