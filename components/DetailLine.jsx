import React from "react";

const DetailLine = ({ label, value }) => {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <p className="text-[14px] text-[#848199]">{label}</p>
      <p className="text-darkmuted font-semibold text-[14px]">{value}</p>
    </div>
  );
};

export default DetailLine;
