"use client";

import LandingCtaButton from "@/components/LandingCtaButton";
import MiningResult from "@/components/MiningResult";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import { useState } from "react";

const HowHashRateWorks = () => {
  const options = ["25 TH/S", "50 TH/S", "100 TH/S", "250 TH/S", "500 TH/S"];
  const [selected, setSelected] = useState("25 TH/S");

  const difficulty = ["-20%", "Current", "+20%"];

  const miningResults = [
    {
      time_period: "1-Day Result",
      btc_mined: "0.00000135",
      usd_mined: "1.1",
    },
    {
      time_period: "1-Month Result",
      btc_mined: "0.0000405",
      usd_mined: "33.1",
    },
    {
      time_period: "1-Year Result",
      btc_mined: "0.0049275",
      usd_mined: "402.71",
    },
    {
      time_period: "2-Years Result",
      btc_mined: "0.009855",
      usd_mined: "805.41",
    },
  ];

  return (
    <SectionWrapper pad={true}>
      <section className="w-full p-[60px] bg-[#f8f8f8] flex flex-col gap-[10px] rounded-[24px]">
        <p className="text-[26px] text-[#5b5b5b]">
          A <a href="/" className="underline text-primaryPurple">cloud mining platform</a> allows you to mine
          cryptocurrency, such as Bitcoin (BTC), without investing in expensive
          hardware or infrastructure.
        </p>
        <p className="text-[26px] text-[#5b5b5b]">
          Users can lease equipment or rent hash power from a third-party
          company. While a great system, it has some challenges.
        </p>
        <p className="text-[26px] text-[#5b5b5b]">
          Enter the cloud computing calculator- a tool that helps a miner
          estimate profits from renting hashing power and determine whether it’s
          worth the investment.
        </p>
      </section>
      <div className="w-full grid grid-cols-2 gap-[30px] justify-between mt-[100px]">
        <h1 className="text-darkmuted font-semibold text-[48px]">
          Here’s How A Bitcoin Hashrate Calculator Works
        </h1>

        <p className="text-[#5b5b5b] text-[18px]">
          Discover your potential earnings with our Bitcoin Cloud Mining
          Calculator. Use our cloud mining profit and ROI calculators to
          estimate and maximize your cryptocurrency investment returns
        </p>
      </div>

      <div className="mt-10 p-[10px] pl-[40px] rounded-[24px] border border-[#b5b5b5] grid grid-cols-[minmax(0,507px)_minmax(0,558px)] justify-between gap-[30px] min-h-[580px]">
        <div className="py-[30px] gap-[35px] flex flex-col">
          <h2 className="text-darkmuted font-semibold text-[40px]">
            Profit calculator
          </h2>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col">
              <label htmlFor="" className="text-[#b5b5b5] text-[16px]">
                Hash rate TH/s
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  defaultValue={25}
                  className="pt-[18px] pr-[50px] pb-[20px] pl-[18px] border w-full border-[#848199] rounded-[12px] text-[24px] text-darkmuted text-center"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex space-x-3">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`px-[12px] py-2 rounded-[12px] border text-[14px] font-medium transition-all cursor-pointer
            ${
              selected === option
                ? "border-darkmuted text-darkmuted"
                : "border-[#b5b5b5] text-[#b5b5b5]"
            }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* section */}
          <div className="flex flex-col">
            <p className="text-darkmuted text-[20px] font-semibold">
              Current Bitcoin price: $823940
            </p>
            <p className="text-[#9a9a9a] text-[16px] self-end">$395839</p>

            <input
              type="range"
              min="82401.77"
              max="329607.08"
              className="styles_input__5Stoe"
            ></input>

            <p className="text-[#9a9a9a] text-[16px]">
              Scroll left and right to adjust reference currency price
            </p>
          </div>

          <div className="flex flex-col mt-[10px] gap-[5px]">
            <p className="text-[#b5b5b5]">Difficulty</p>
            <div className="grid grid-cols-3 justify-between gap-[20px]">
              {difficulty.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`p-[20px] rounded-[12px] border text-[14px] font-medium transition-all cursor-pointer border-[#b5b5b5] text-[#b5b5b5]`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#6835a0] to-[#3f1d65] rounded-[24px] py-[50px] px-[30px] flex flex-col justify-between">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[25px]">
              {miningResults.map((result) => {
                return <MiningResult {...result} key={result.time_period} />;
              })}

              <button
                className={`px-9 py-3.5 w-max rounded-lg bg-yellow100 text-white`}
              >
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowHashRateWorks;
