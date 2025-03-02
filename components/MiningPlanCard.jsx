import React from "react";

const MiningPlanCard = () => {
  return (
    <div className="flex flex-col gap-[12px] relative overflow-hidden max-w-[288px] min-w-[288px] flex-[1_1] py-[24px] px-[16px] border border-[#ececec] rounded-[20px] shrink-0">
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

      <div className="grid grid-cols-3 items-center gap-[14px] mb-[8px] min-h-[31px]">
        <p className="text-[24px] font-bold text-left text-darkmuted">$74</p>
        <div className="bg-[#ececec] w-[1px] self-stretch"></div>
        <div>
          <p className="text-[10px] text-darkmuted font-medium mb-[2px] whitespace-nowrap">
            Estimated profit
          </p>
          <p className="text-[#35948d] font-bold text-[14px] whitespace-nowrap">
            $ 1.95 (2%)
          </p>
        </div>
      </div>

      <button className="bg-[#815aac] text-white text-[16px] cursor-pointer rounded-[12px] font-medium py-[12px]">
        ORDER NOW
      </button>

      <div className="h-[1px] bg-grey300 w-full"></div>

      <div className="bg-transparent border border-grey300 rounded-[8px] flex flex-row justify-between py-[11px] px-[11px]">
        <div className="border-r borde-r-grey300 flex-[1_1]">
          <p className="text-[14px] text-darkmuted font-medium">1-month</p>
        </div>
        <div className="flex-[1_1]">
          <p className="text-[14px] text-textgrey text-center font-medium">
            50 th/s
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[10px]">
        <input
          type="range"
          name=""
          min={0}
          max={99}
          step={1}
          defaultValue={0}
          className="w-full appearance-none bg-grey300 h-[5px] rounded-lg 
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:w-3
                [&::-webkit-slider-thumb]:h-3 
                [&::-webkit-slider-thumb]:bg-brightyellow 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:cursor-pointer 
                [&::-moz-range-thumb]:w-3 
                [&::-moz-range-thumb]:h-3 
                [&::-moz-range-thumb]:bg-brightyellow
                [&::-moz-range-thumb]:rounded-full 
                [&::-moz-range-thumb]:cursor-pointer"
          id=""
        />
      </div>
    </div>
  );
};

export default MiningPlanCard;
