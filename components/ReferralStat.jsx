import React from "react";
import { FaUser } from "react-icons/fa6";

const ReferralStat = ({ number = 0, Icon = FaUser, label = "" }) => {
  return (
    <div className="flex flex-col gap-[10px] py-[15px] px-[30px] border border-[#ececec] rounded-[16px] w-full">
      <div className="flex flex-row items-center gap-[10px]">
        <div className="w-[40px] h-[40px] rounded-full text-white bg-[#815aac] flex items-center justify-center">
          <Icon />
        </div>
        <p className="text-[24px] font-semibold text-darkmuted">
          {number || 0}
        </p>
      </div>

      <p className="text-[#5b5b5b] text-[14px]">{label}</p>
    </div>
  );
};

export default ReferralStat;
