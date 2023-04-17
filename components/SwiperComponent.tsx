import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

const SwiperComponent = ({}) => {
    const swiperRef = useRef();
    useEffect(()=>{
      register();
  },[])
  
  return (
    <swiper-container
      ref={swiperRef}
      slides-per-view="1"
      navigation="false"
      pagination="true"
    >
        <swiper-slide>
            <div className="w-full h-40 bg-yellow-400 flex !mr-2">slide 1</div>
        </swiper-slide>
        <swiper-slide>
            <div className="w-40 h-40 bg-yellow-400 flex mx-2">slide 2</div>
        </swiper-slide>
        <swiper-slide>
            <div className="w-40 h-40 bg-yellow-400 flex mx-2">slide 3</div>
        </swiper-slide>
        
    </swiper-container>
  );
};

export default SwiperComponent;
