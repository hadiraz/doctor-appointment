import React, { ReactElement } from "react";

const TitleIconContainer = ({children , classes} : {children : ReactElement , classes ?: string}) => {
  return (
    <span className={`${classes} flex justify-center transition-all duration-200 items-center rounded-5xl bg-buttons p-4 rounded-[18px] shadow-xl shadow-buttonShadows mr-4`}>
      {children}
    </span>
  );
};

export default TitleIconContainer;
