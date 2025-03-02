import React from "react";

const Stats = ({number, label}) => {
  return (
    <div className="pb-6 border-b border-b-grey100 flex flex-col items-center gap-1 text-center">
      <p className="text-white text-[32px]">{number}</p>
      <p className="text-text100 text-[16px]">{label}</p>
    </div>
  );
};

export default Stats;
