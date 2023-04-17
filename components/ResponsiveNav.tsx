import React from "react";

const ResponsiveNav = ({ className , setMenuStatus }: { setMenuStatus : React.Dispatch<React.SetStateAction<boolean>> , className?: string }) => {
  return (
    <section
      className={`w-[50vw] min-h-screen flex flex-col absolute top-0 right-0 bg-white rounded-tl-3xl rounded-bl-3xl transition-all duration-200 ease-in z-20 ${className}`}
    >
      <div className="flex w-full items-center py-4 px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer"
          onClick={()=>setMenuStatus(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex w-full items-center py-3 px-2">
        <div className="flex w-9 h-9 rounded-full bg-white border border-gray-400 mr-2"></div>
        <p>login please</p>
      </div>
      <nav className="w-full h-full flex mt-3">
        <ul className="w-full h-full flex flex-col">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="80"
              fill="#8abd53"
              className=" rotate-180 mr-3"
            >
              <path
                fill=""
                d="m5.396 28.424.303-.316A40.606 40.606 0 0 0 17 0v83.059A41.565 41.565 0 0 0 5.407 54.26c-6.933-7.215-6.938-18.614-.011-25.835Z"
              />
            </svg>
            <span className="flex items-center capitalize text-primary font-semibold">
              home
            </span>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default ResponsiveNav;
