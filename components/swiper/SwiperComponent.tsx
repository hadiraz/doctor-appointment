import React, { ReactElement, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { register } from "swiper/element/bundle";
register();
const SwiperComponent = ({ items }: { items: ReactElement[] }) => {
  //   <SwiperSlide className="!w-full !flex !justify-center" key={value.key}>
  //     {value}
  //   </SwiperSlide>
  // const slides = items.map((value, key) => (
  // ));
  // return (
  //   <Swiper
  //     modules={[Navigation, Scrollbar, A11y]}
  //     spaceBetween={0}
  //     slidesPerView={1}
  //     className="!w-full"
  //     onSlideChange={() => console.log("slide change")}
  //   >
  //     <SwiperSlide>

  //     </SwiperSlide>
  //     {slides}
  //   </Swiper>
  // );
  const swiperElRef = useRef(null);

  return (
    // <swiper-container
    //   ref={swiperElRef}
    //   slides-per-view="1"
    //   navigation="true"
    //   pagination="true"
    //   className="!w-full"
    // >
    //   {items.map((value, key) => (
    //     <swiper-slide key={value.key}>{value}</swiper-slide>
    //   ))}
    // </swiper-container>
    <>
    k</>
  );
};

export default SwiperComponent;
