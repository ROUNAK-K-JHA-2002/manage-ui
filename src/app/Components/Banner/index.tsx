import React, { FC } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Image from "next/image";
import { bgSimplifySectionDesktop } from "@/assets";

const Banner: FC = () => {
  return (
    <div className=" w-screen min-h-[30vh] flex flex-col items-end justify-end  mt-5">
      <div className=" h-[30vh] w-full bg-primary-brightRed relative flex flex-row justify-around items-center ">
        <Image src={bgSimplifySectionDesktop} alt="bgSimplifySectionDesktop" className=" absolute right-0 bottom-0 " />
        <p className=" text-white text-5xl font-bold w-2/5 ">
          Simplify how your team works today.
        </p>
        <PrimaryButton requireWhiteBG={true}>Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default Banner;
