import React from "react";

const RevenueStat = ({ title, value }) => {
  return (
    <div className="bg-[#8e61bf] flex flex-col rounded-2xl gap-[5px] py-[10px] px-[25px] w-full">
      <p className="text-[16px] text-white">{title}</p>
      <p className="text-[24px] text-white font-semibold">{value}</p>
    </div>
  );
};

export default RevenueStat;
