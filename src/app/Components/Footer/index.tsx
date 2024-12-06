import { navbarMenus } from "@/app/utils/constants";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
  iconYouTube,
  logo,
} from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const Footer: FC = () => {
  return (
    <div className=" bg-neutral-veryDarkBlue w-screen md:h-60 z-10 flex flex-col-reverse md:flex-row text-white py-6 px-4">
      <div className=" w-full md:w-1/4 h-full flex flex-col-reverse md:flex-col items-center justify-evenly gap-8">
        <div className=" text-neutral-darkGrayishBlue text-sm block md:hidden">
          Copyright {new Date().getFullYear()}.All Right Reserved.
        </div>
        <Image src={logo} alt="Logo" className=" invert" />
        <div className=" flex gap-5 items-center justify-center ">
          {[
            iconFacebook,
            iconInstagram,
            iconPinterest,
            iconTwitter,
            iconYouTube,
          ].map((item, index) => (
            <Image src={item} key={index} className="" alt="S-icons" />
          ))}
        </div>
      </div>
      <div className=" flex  w-full  justify-around py-5 px-3  mb-6">
        {" "}
        <div className=" w-full md:w-1/5 h-full flex  justify-center gap-4 flex-col">
          {navbarMenus.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <div className=" w-full md:w-1/5 h-full flex  justify-center gap-4 flex-col">
          {["Carrer", "Community", "Privacy Policy"].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
      <div className=" w-full md:w-1/4 h-full flex flex-col justify-evenly">
        <div className=" flex gap-3 ">
          <input
            type="email"
            className=" focus:outline-none rounded-2xl px-3"
            placeholder="Updates in your Inbox..."
          />
          <div className=" bg-primary-brightRed px-6 py-2 rounded-3xl">Go</div>
        </div>
        <div className=" text-neutral-darkGrayishBlue text-sm md:block hidden">
          Copyright {new Date().getFullYear()}.All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
