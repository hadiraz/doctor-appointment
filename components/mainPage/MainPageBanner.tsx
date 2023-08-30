import React from "react";
import MedicalBanner from "@/public/assets/images/medical.png";
import Image from "next/image";
import Background from "@/public/assets/images/bg-line.png"
const MainPageBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center relative w-full max-w-7xl h-[88vh] md:flex-row md:h-auto">
      <Image width={300} height={300} src={Background} alt="" className="absolute w-auto h-auto left-0 md:left-[-10%] bottom-0 opacity-80"/>
      <div className="flex justify-center items-center relative z-[1]">
        <Image src={MedicalBanner} width={400} height={400} alt="banner" />
      </div>
      <div className="flex flex-col items-center mt-3 md:mt-0 justify-center relative z-[1]">
        <p className="text-xl font-extrabold md:items-start sm:text-3xl px-2 text-justify md:text-left">
            {/* <span className="relative flex w-3 h-3 rounded-full bg-lime-500 mr-3">
                <span className="absolute top-0 left-0 w-full h-full animate-ping bg-lime-500 rounded-full"></span>
            </span> */}
        Advanced Imaging for a <strong className="sm:text-2xl font-bold text-green-600 relative after:absolute after:h-[2px] after:w-full after:-bottom-1 after:left-0 after:bg-lightPrimary">Healthier</strong> You.
        </p>
        <p className="text-xl font-extrabold md:items-start text-justify sm:text-3xl px-2 mt-7 md:text-left">
        {/* <span className="relative flex w-3 h-3 rounded-full bg-lime-500 mr-3">
                <span className="absolute top-0 left-0 w-full h-full animate-ping bg-lime-500 rounded-full"></span>
            </span> */}
        Cutting-Edge Technology for <em className=" text-sky-700 relative after:absolute after:h-[2px] after:w-full after:-bottom-1 after:left-0 after:bg-sky-200">Accurate Results</em>.
        </p>
      </div>
    </section>
  );
};

export default MainPageBanner;
