import React from "react";
import { primaryMenuItems, secondaryMenuItems } from "@/constants/constants";

const RightSider = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <p className="text-[16px] text-[#c9c9c9] mt-[40px] ml-[20px]">
          PRIMARY
        </p>
        <div className="flex flex-col gap-5 mt-5">
          {primaryMenuItems.map((menuItem) => {
            return (
              <a
                className="flex flex-row items-center gap-4 rounded-[6px] py-[10px] px-[20px] transition-all delay-75 text-[18px] hover:bg-faintpurple hover:font-semibold"
                key={menuItem.name}
                href={menuItem.path}
              >
                <menuItem.icon size={25} />
                <p className="whitespace-nowrap">{menuItem.name}</p>
              </a>
            );
          })}
        </div>
      </div>

      <div className="w-[70%] h-[1px] bg-darkmuted opacity-20 mt-10"></div>

      <div className="w-full flex flex-col">
        <p className="text-[16px] text-[#c9c9c9] mt-[20px] ml-[20px]">
          SECONDARY
        </p>

        <div className="flex flex-col gap-5 mt-5">
          {secondaryMenuItems.map((menuItem) => {
            return (
              <a
                className="flex flex-row items-center gap-4 rounded-[6px] py-[10px] px-[20px] transition-all delay-75 text-[18px] hover:bg-faintpurple hover:font-semibold"
                key={`nav-item-${menuItem.name}`}
                href={menuItem.path}
              >
                <menuItem.icon size={25} />
                <p className="whitespace-nowrap">{menuItem.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSider;
