import { illustrationIntro } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const LandingPage: FC = () => {
  return (
    <div className=" h-[80vh] w-screen  flex flex-col md:flex-row">
      <div className=" w-full md:w-1/2  flex justify-center items-center">
        <div className=" w-full md:w-3/5 mx-auto  flex flex-col gap-5">
          <p className="text-6xl font-semibold text-neutral-veryDarkBlue">
            Bring everyone together to build better products.
          </p>
          <p className="text-xl text-neutral-darkGrayishBlue mb-6">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <PrimaryButton requireWhiteBG={false}>Get Started</PrimaryButton>
        </div>
      </div>
      <div className=" w-full md:w-1/2  flex justify- items-center">
        <Image
          src={illustrationIntro}
          className=" h-[85%] w-[75%] ms-5"
          alt="IllustrationIntro"
        />
      </div>
    </div>
  );
};

export default LandingPage;
