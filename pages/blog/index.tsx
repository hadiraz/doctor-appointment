import Image from "next/image";
import React from "react";
import Hospital from "@/public/assets/images/hospital-services.jpg";
import TitleIconContainer from "@/components/TitleIconContainer";
const Index = () => {
  return (
    <section className="flex flex-col w-full max-w-7xl">
      {/* icon must be added */}
      <div className="w-full flex items-center mb-10 px-5">
        <TitleIconContainer>
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z" />
            <path d="M8 6h9v2H8z" />
          </svg>
        </TitleIconContainer>
        <p className="flex ml-4 text-2xl font-bold">Blog</p>
      </div>
      <section className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-4">
        <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
          <div className="w-full flex items-center justify-center">
            <Image
              src={Hospital}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="hospital"
              className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
            />
          </div>
          <article className="flex flex-col w-full mt-5 px-1">
            <h3 className="w-full text-lg font-bold text-text leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="flex w-full break-words text-sm mt-2 text-[#6f6f6f] text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              maiores animi ratione delectus adipisci rem iure eius optio autem
              suscipit.
            </p>
          </article>
        </div>
        <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
          <div className="w-full flex items-center justify-center">
            <Image
              src={Hospital}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="hospital"
              className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
            />
          </div>
          <article className="flex flex-col w-full mt-5 px-1">
            <h3 className="w-full text-lg font-bold text-text leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="flex w-full break-words text-sm mt-2 text-[#6f6f6f] text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              maiores animi ratione delectus adipisci rem iure eius optio autem
              suscipit.
            </p>
          </article>
        </div>
        <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
          <div className="w-full flex items-center justify-center">
            <Image
              src={Hospital}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="hospital"
              className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
            />
          </div>
          <article className="flex flex-col w-full mt-5 px-1">
            <h3 className="w-full text-lg font-bold text-text leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="flex w-full break-words text-sm mt-2 text-[#6f6f6f] text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              maiores animi ratione delectus adipisci rem iure eius optio autem
              suscipit.
            </p>
          </article>
        </div>
        <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
          <div className="w-full flex items-center justify-center">
            <Image
              src={Hospital}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="hospital"
              className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
            />
          </div>
          <article className="flex flex-col w-full mt-5 px-1">
            <h3 className="w-full text-lg font-bold text-text leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="flex w-full break-words text-sm mt-2 text-[#6f6f6f] text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              maiores animi ratione delectus adipisci rem iure eius optio autem
              suscipit.
            </p>
          </article>
        </div>
        <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
          <div className="w-full flex items-center justify-center">
            <Image
              src={Hospital}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="hospital"
              className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
            />
          </div>
          <article className="flex flex-col w-full mt-5 px-1">
            <h3 className="w-full text-lg font-bold text-text leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="flex w-full break-words text-sm mt-2 text-[#6f6f6f] text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              maiores animi ratione delectus adipisci rem iure eius optio autem
              suscipit.
            </p>
          </article>
        </div>
        <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
          <div className="w-full flex items-center justify-center">
            <Image
              src={Hospital}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="hospital"
              className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
            />
          </div>
          <article className="flex flex-col w-full mt-5 px-1">
            <h3 className="w-full text-lg font-bold text-text leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="flex w-full break-words text-sm mt-2 text-[#6f6f6f] text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              maiores animi ratione delectus adipisci rem iure eius optio autem
              suscipit.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Index;
