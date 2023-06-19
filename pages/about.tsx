import Image from "next/image";
import React from "react";
import TestImage from "@/public/assets/images/hospital-services.jpg";
const About = () => {
  return (
    <section className="w-full max-w-7xl min-h-screen">
      <div className="w-full flex flex-col md:flex-row mb-5 gap-3 px-4 md:px-3">
        <div className="flex flex-col">
          <h4 className=" font-extrabold text-lg text-text flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-8 h-8 fill-green-600 flex mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            qui.
          </h4>
          <p className="text-slate-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nulla totam aperiam ab libero quo id officia quaerat eveniet alias
            corrupti placeat aliquid, autem dignissimos eum aliquam provident,
            atque harum!
          </p>
        </div>
        <span className="flex items-center justify-center">
          <Image
            className="rounded-xl md:min-w-[300px]"
            src={TestImage}
            width={400}
            height={400}
            alt="image"
          />
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row mb-5 gap-3 px-4 md:px-3">
        <div className="flex flex-col">
          <h4 className=" font-extrabold text-lg text-text flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-8 h-8 fill-green-600 flex mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            qui.
          </h4>
          <p className="text-slate-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nulla totam aperiam ab libero quo id officia quaerat eveniet alias
            corrupti placeat aliquid, autem dignissimos eum aliquam provident,
            atque harum!
          </p>
        </div>
        <span className="flex items-center justify-center">
          <Image
            className="rounded-xl md:min-w-[300px]"
            src={TestImage}
            width={400}
            height={400}
            alt="image"
          />
        </span>
      </div>
    </section>
  );
};

export default About;
