import React from "react";
import LandingBullet from "@/components/LandingBullet";
import LandingCtaButton from "@/components/LandingCtaButton";
import Stats from "@/components/Stats";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen br1270:h-screen">
      <div className="flex items-center justify-center bg-primaryPurple px-[20px] sm:px-[50px] relative bg-no-repeat bg-cover w-full h-full max-[1270px]:py-[30px]">
        <span className="block overflow-hidden absolute inset-0 w-full h-full bg-red-50">
          <img
            src="/herobanner.jpg"
            alt=""
            className="w-full h-full absolute object-cover overflow-clip"
          />
        </span>

        <div className="w-full max-w-[1300px] sm:px-[50px]">
          <div className="flex max-[1270px]:flex-col justify-between gap-[64px]">
            <div className="flex flex-col justify-center relative gap-[8px] flex-[5_1_0%]">
              <h1 className="text-white text-[50px] sm:text-[60px] font-semibold">
                Cloud Mining Platform
              </h1>
              <h2 className="text-white text-[32px] font-semibold">
                Get Bitcoin for less than buying it directly
              </h2>

              <div className="mt-10 flex flex-col gap-4">
                <LandingBullet
                  label={
                    "Cloud Mining with 1BitUp: Benefit from reduced costs and higher returns by mining Bitcoin instead of purchasing it."
                  }
                />
                <LandingBullet
                  label={
                    "Steady Mining - Invest in mining with guaranteed returns for steady, predictable profits."
                  }
                />
              </div>

              <div className="flex flex-row items-center mt-4 gap-5 max-sm:flex-wrap">
                <LandingCtaButton label="Cloud Mining" />
                <LandingCtaButton label="Steady Mining" variant="white" />
              </div>
            </div>

            <div className="flex-[3_1_0%]">
              <div className="flex flex-col gap-[24px] bg-bg100 rounded-3xl border border-[#67379b] p-8 backdrop-blur-[2px]">
                <Stats number={24} label={"New referrals registered"} />
                <Stats number={446} label={"New users"} />
                <Stats number={"₿ 0.428"} label={"Mined in 7 days"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
