import React, { ReactElement, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const SwiperComponent = ({ items }: { items: ReactElement[] }) => {

  return (
    <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    className="!w-full"
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((value, key) => (
        <SwiperSlide className="!w-full !flex !justify-center" key={value.key}>{value}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
