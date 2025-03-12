import React from "react";
import LandingBullet from "@/components/LandingBullet";
import LandingCtaButton from "@/components/LandingCtaButton";
import Stats from "@/components/Stats";

const CalculatorHero = () => {
  return (
    <section className="w-full min-h-[274px]">
      <div className="flex items-center justify-center bg-primaryPurple px-[20px] sm:px-[50px] relative bg-no-repeat bg-cover w-full min-h-full max-[1270px]:py-[30px]">
        <span className="block overflow-hidden absolute inset-0 w-full min-h-[274px] bg-red-50">
          <img
            src="/calculatorbanner.webp"
            alt="hero"
            className="w-full h-full absolute object-cover overflow-clip"
          />
        </span>

        <div className="w-full max-w-[1300px] sm:px-[50px] min-h-[274px]">
          <div className="flex max-[1270px]:flex-col justify-between gap-[64px] min-h-[274px]">
            <div className="flex flex-col justify-center relative gap-[8px] flex-[5_1_0%]">
              <h1 className="text-white text-[50px] sm:text-[60px] font-semibold">
                Cloud Mining Profit calculator
              </h1>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorHero;
