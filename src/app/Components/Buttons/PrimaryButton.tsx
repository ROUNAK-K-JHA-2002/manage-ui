import React, { FC, ReactNode } from "react";

const PrimaryButton: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className=" bg-primary-brightRed text-white w-40 h-12 flex justify-center items-center font-semibold rounded-3xl text-md  shadow-lg shadow-primary-brightRed cursor-pointer">
      {children}
    </div>
  );
};

export default PrimaryButton;
