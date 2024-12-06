import { navbarMenus } from "@/app/utils/constants";
import { logo } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const Navbar: FC = () => {
  return (
    <div className=" flex justify-around h-28 items-center">
      <Image src={logo} alt="Logo" height={50} width={150} />
      <div className=" flex gap-7">
        {navbarMenus.map((item) => (
          <div className=" text-lg" key={item}>
            {item}
          </div>
        ))}
      </div>
      <PrimaryButton requireWhiteBG={false}>Get Started</PrimaryButton>
    </div>
  );
};

export default Navbar;
