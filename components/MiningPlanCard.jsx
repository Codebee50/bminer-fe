import React from "react";

const MiningPlanCard = () => {
  return (
    <div className="flex flex-col gap-[12px] relative overflow-hidden w-[288px] flex-[1_1] py-[24px] px-[16px] border border-[#ececec] rounded-[20px]">
      <div className="flex flex-row justify-between mb-[8px]">
        <div className="flex flex-col">
          <p className="text-[20px] text-darkmuted">Classic</p>
          <p className="text-[24px] text-[#815aac] font-bold">Starter</p>
        </div>

        <div className="flex flex-col">
          <div className="bg-[#ffc025] flex items-center justify-center w-[75px] h-[18px] rounded-[12px]">
            <p className="text-[8px] text-white font-light text-center">
              Bestseller
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center w-max gap-[14px] mb-[8px] min-h-[31px]">
            <p className="text-[24px] font-bold text-left text-darkmuted">$74</p>
            <div className="bg-[#ececec] w-[1px] self-stretch"></div>
      </div>
    </div>
  );
};

export default MiningPlanCard;
