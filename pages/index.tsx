import MainPageBanner from "@/components/MainPageBanner";
import SwiperComponent from "@/components/SwiperComponent";
import TeamSwiperContainer from "@/components/TeamSwiperContainer";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex w-full flex-col items-center min-h-screen max-w-7xl px-3">
      <MainPageBanner />
      <TeamSwiperContainer/>
    </section>
  );
}
