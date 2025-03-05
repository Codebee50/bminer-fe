import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import { RiApps2AddLine } from "react-icons/ri";
import PlanCard from "./PlanCard";

const MiningPlanCard = ({
  name,
  tier,
  hashpower,
  is_bestseller,
  price,
  estimated_profit_percentage,
  estimated_profit_amount,
  contract_duration_days,
  discount_percentage,
  availability_percentage,
}) => {

  return (
    <div className="bg-white flex flex-col gap-[12px] relative overflow-hidden max-w-[288px] min-w-[288px] flex-[1_1] py-[24px] px-[16px] border border-[#ececec] rounded-[20px] shrink-0">
      <div className="flex flex-row justify-between mb-[8px]">
        <div className="flex flex-col">
          <p className="text-[20px] text-darkmuted">{name}</p>
          <p className="text-[24px] text-[#815aac] font-bold">{tier}</p>
        </div>

        <div className="flex flex-col">
          {is_bestseller && (
            <div className="bg-[#ffc025] flex items-center justify-center w-[75px] h-[18px] rounded-[12px]">
              <p className="text-[8px] text-white font-light text-center">
                Bestseller
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 items-center gap-[14px] mb-[8px] min-h-[31px]">
        <p className="text-[24px] font-bold text-left text-darkmuted">
          ${parseFloat(price)}
        </p>
        <div className="bg-[#ececec] w-[1px] self-stretch"></div>
        <div>
          <p className="text-[10px] text-darkmuted font-medium mb-[2px] whitespace-nowrap">
            Estimated profit
          </p>
          <p className="text-[#35948d] font-bold text-[14px] whitespace-nowrap">
            $ {parseFloat(estimated_profit_amount)} (
            {parseInt(estimated_profit_percentage)}%)
          </p>
        </div>
      </div>

      <button className="bg-[#815aac] text-white text-[16px] cursor-pointer rounded-[12px] font-medium py-[12px]">
        ORDER NOW
      </button>

      <div className="h-[1px] bg-grey300 w-full"></div>

      <div className="bg-transparent border border-grey300 rounded-[8px] flex flex-row justify-between py-[11px] px-[11px]">
        <div className="border-r borde-r-grey300 flex-[1_1]">
          <p className="text-[14px] text-darkmuted font-medium">
            {contract_duration_days}-days
          </p>
        </div>
        <div className="flex-[1_1]">
          <p className="text-[14px] text-textgrey text-center font-medium">
            {parseFloat(hashpower)} th/s
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[10px]">
        <MdInfoOutline className="text-darkmuted opacity-50" size={20} />

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

      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-[10px] text-[#5b5b5b] font-medium">
          Discount on volume:
        </p>
        <p className="text-[11px] font-bold">
          {parseInt(discount_percentage)}%
        </p>
      </div>

      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-[10px] text-[#5b5b5b] font-medium">Saved:</p>
        <p className="text-[11px] font-bold">$ 3.4</p>
      </div>

      <div className="flex flex-row items-center text-[#815aac] font-semibold gap-2">
        <RiApps2AddLine size={20} />
        <p>ROI Calculator</p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <p className="text-[10px] text-[#5b5b5b] font-medium">BTC Price</p>
        <div className="flex flex-row items-center gap-[4px]">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-[8px]">
        <p className="text-[10px] text-[#5b5b5b] font-medium">
          Send out at 100%
        </p>

        <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden">
          {/* Progress bar */}
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-purple-300 transition-all duration-300"
            style={{ width: `${availability_percentage}%` }}
          ></div>

          {/* Percentage text */}
          <p className="absolute inset-0 flex items-center justify-center text-[8px] text-white font-bold">
            {availability_percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiningPlanCard;
