import React, { ReactElement, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { register } from "swiper/element/bundle";
register();
const SwiperComponent = ({ items }: { items: ReactElement[] }) => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      pagination
      className={`w-full`}
      onSlideChange={() => console.log("slide change")}
    >
      {items.map((value, key) => (
        <SwiperSlide className="" key={value.key}>{value}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
