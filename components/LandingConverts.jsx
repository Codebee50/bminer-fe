import React from "react";

const LandingConverts = ({ label, text }) => {
  return (
    <div className="pb-[40px] flex flex-row border-b border-b-[#ececec] items-start gap-[32px]">
      <img src="/eclipse.svg" alt="" />
      <div className="flex flex-col gap-[12px] justify-start">
        <p className="text-[24px] text-[#373737] font-medium">{label}</p>
        <p className="mb-[1rem] text-sm">{text}</p>
      </div>
    </div>
  );
};

export default LandingConverts;
