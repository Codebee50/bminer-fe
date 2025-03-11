"use client";
import { useState, useEffect } from "react";
import React from "react";
import { MdInfoOutline } from "react-icons/md";
import FeatureItem from "./FeatureItem";
import { useRouter } from "next/navigation";

const SteadyMiningPlanCard = ({
  category_name,
  tier,
  is_bestseller,
  least_entry_amount_usdt,
  hashpower,
  availability_percentage,
  duration_months,
  estimated_profit_amount,
  estimated_profit_percentage,
  annual_profit_percentage,
}) => {
  const [entryAmount, setEntryAmount] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [hashPowerValue, setHashPowerValue] = useState(parseFloat(hashpower));

  const router = useRouter();

  useEffect(() => {
    setEntryAmount(least_entry_amount_usdt);
  }, [least_entry_amount_usdt]);

  const handleRangeValueChanged = (e) => {
    const newValue = Number(e.target.value);

    const difference = newValue - rangeValue;
    const newHashPowerValue = hashPowerValue + difference;
    setHashPowerValue(newHashPowerValue);

    setRangeValue(newValue);

    const costPerHash =
      parseFloat(least_entry_amount_usdt) / parseFloat(hashpower);

    setEntryAmount(newHashPowerValue * costPerHash);
  };

  const handleOrderNowClicked = () => {
    router.push(
      `/account/payment?id=${id}&hashpower=${hashPowerValue}&q=${quantity}&p=${entryAmount}`
    );
  };

  const features = [
    { label: "Custom" },
    { label: "Contract duration:", value: `${duration_months} month` },
    {
      label: "Estimated output:",
      value: `$${parseFloat(estimated_profit_amount)} (${parseFloat(
        estimated_profit_percentage
      )}%)`,
      badge: `Annual profit (${parseFloat(annual_profit_percentage)}%)`,
    },
    // { label: "Hashpower, TH/s:", value: "137.53" },
  ];

  return (
    <div className="bg-white flex flex-col gap-[12px] relative overflow-hidden max-w-[288px] min-w-[288px] flex-[1_1] py-[24px] px-[16px] border border-[#ececec] rounded-[20px] shrink-0">
      <div className="flex flex-row justify-between mb-[8px]">
        <div className="flex flex-col">
          <p className="text-[20px] text-darkmuted">{category_name}</p>
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

      <div className="flex flex-row flex-wrap items-center gap-[14px] mb-[8px] min-h-[31px]">
        <p className="text-[24px] font-bold text-left text-darkmuted">
          ${parseFloat(entryAmount)}
        </p>
      </div>

      <div className="flex items-center gap-[10px]">
        <MdInfoOutline className="text-darkmuted opacity-50" size={20} />

        <input
          type="range"
          name=""
          min={0}
          max={1000}
          step={1}
          value={rangeValue}
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
          onChange={handleRangeValueChanged}
        />
      </div>

      <button
        className="bg-[#815aac] text-white text-[16px] cursor-pointer rounded-[12px] font-medium py-[12px]"
        onClick={handleOrderNowClicked}
      >
        ORDER NOW
      </button>

      <h2 className="text-[16px] font-bold text-darkmuted">Features</h2>

      <div className="space-y-[12px]">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}

        <FeatureItem label={"Hashpower, TH/s:"} value={hashPowerValue} />
      </div>

      <div className="flex flex-row items-center justify-between gap-[8px]">
        <p className="text-[10px] text-[#5b5b5b] font-medium">
          Send out at 100%
        </p>

        <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden">
          {/* Progress bar */}
          <div
            className="h-full bg-gradient-to-r from-purple500 to-purple500 transition-all duration-300"
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

export default SteadyMiningPlanCard;
