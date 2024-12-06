import { featureContent } from "@/app/utils/constants";
import React, { FC } from "react";

const FeaturesPage: FC = () => {
  return (
    <div className=" h-[70vh] w-screen  flex flex-col justify-center items-center md:flex-row ">
      <div className=" w-full md:w-1/2  h-3/5">
        <div className=" w-full md:w-3/5 mx-auto  flex flex-col h-full gap-5">
          <p className="text-4xl font-semibold text-neutral-veryDarkBlue">
            What's different about Manage?
          </p>
          <p className=" text-neutral-darkGrayishBlue mb-6 w-3/5">
            Manage provides all the functionality your team needs,without the
            complexity. Oursoftware is tailor-made fo modern digital product
            teams
          </p>
        </div>
      </div>
      <div className=" w-full md:w-1/2 ">
        <div className=" w-full md:w-3/5 mx-auto  flex flex-col gap-6">
          {featureContent.map((item, index) => (
            <div key={index} className=" flex gap-5">
              <p className=" px-6 py-2 h-max rounded-full bg-primary-brightRed text-white">
                0{index + 1}
              </p>
              <div className=" flex flex-col gap-3">
                <p className=" text-neutral-veryDarkBlue font-bold">
                  {item.heading}
                </p>
                <p className=" text-neutral-darkGrayishBlue">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
