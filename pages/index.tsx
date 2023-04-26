import MainPageBanner from "@/components/MainPageBanner";
import SwiperComponent from "@/components/SwiperComponent";
import TeamSwiperContainer from "@/components/TeamSwiperContainer";
import Image from "next/image";
import Nuclear from "@/public/assets/images/neclear-image.jpg";
import Services from "@/components/Services";
export default function Home() {
  return (
    <section className="flex w-full flex-col items-center min-h-screen max-w-7xl px-3">
      <MainPageBanner />
      <TeamSwiperContainer />
      <section
        style={{ background: "" }}
        className="bg-accent flex max-w-5xl z-[5] relative justify-between md:justify-start rounded-lg items-center my-10 w-full py-2 px-3"
      >
        {/* <span className="blur-lg w-full h-full absolute top-1 left-1 flex rounded-lg -z-10 bg-accent"></span> */}
        <span className="w-full h-full absolute top-0 left-0 flex rounded-lg z-[-1] bg-accent opacity-40"></span>
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="absolute rounded-lg -z-10 bg-slate-400"
          src={Nuclear}
          fill={true}
          alt="nuclear"
        />
        <div className="flex sm:flex-row flex-col w-full md:w-fit justify-between items-center rounded-xl backdrop-blur-lg p-2 m-1">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-0">
            Lets start here
          </p>
          <button className=" bg-lime-500 font-bold rounded-xl flex justify-center items-center p-2 text-white shadow-xl mx-2 ml-5">
            Book appointment
          </button>
        </div>
      </section>
      <Services/>
    </section>
  );
}
