import React from "react";
import LandingBullet from "@/components/LandingBullet";
import LandingCtaButton from "@/components/LandingCtaButton";
import Stats from "@/components/Stats";

const SteadyHero = () => {
  return (
    <section className="w-full min-h-screen br1270:h-screen">
      <div className="flex items-center justify-center bg-primaryPurple px-[20px] sm:px-[50px] relative bg-no-repeat bg-cover w-full h-full max-[1270px]:py-[30px]">
        <span className="block overflow-hidden absolute inset-0 w-full h-full bg-red-50">
          <img
            src="/steadybanner.jpg"
            alt=""
            className="w-full h-full absolute object-cover overflow-clip"
          />
        </span>

        <div className="w-full max-w-[1300px] sm:px-[50px]">
          <div className="flex max-[1270px]:flex-col justify-between gap-[64px] max-w-[700px]">
            <div className="flex flex-col justify-center relative gap-[8px] flex-[5_1_0%]">
              <h1 className="text-white text-[50px] sm:text-[60px] font-semibold">
                Earn Fixed Income <span className="text-yellow100">up to 25%</span> per annum
              </h1>


              <div className="flex flex-row items-center mt-4 gap-5 max-sm:flex-wrap">
                <LandingCtaButton label="Choose a plan"  anchor href="#explore-steady-plans"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteadyHero;
