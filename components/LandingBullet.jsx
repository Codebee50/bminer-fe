import React from "react";

const LandingBullet = ({ label }) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <div className="w-[10px] h-[10px] bg-yellow100 rounded-full shrink-0"></div>
        <p className="text-white text-[15px] sm:text-[20px]">{label}</p>
      </div>
    </div>
  );
};

export default LandingBullet;
