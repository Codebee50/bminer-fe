import React from "react";
import LandingBullet from "@/components/LandingBullet";
import LandingCtaButton from "@/components/LandingCtaButton";
import Stats from "@/components/Stats";

const Hero = () => {
  return (
    <section className="w-full min-h-screen br1270:h-screen">
      <div className="flex items-center justify-center bg-primaryPurple px-[20px] sm:px-[50px] relative bg-no-repeat bg-cover w-full h-full max-[1270px]:py-[30px]">
        <span className="block overflow-hidden absolute inset-0 w-full h-full bg-red-50">
          <img
            src="/mining-banner.webp"
            alt=""
            className="w-full h-full absolute object-cover overflow-clip"
          />
        </span>

        <div className="w-full max-w-[1300px] sm:px-[50px]">
          <div className="flex max-[1270px]:flex-col justify-between gap-[64px] max-w-[700px]">
            <div className="flex flex-col justify-center relative gap-[8px] flex-[5_1_0%]">
              <h1 className="text-white text-[50px] sm:text-[60px] font-semibold">
                Cloud Mining
              </h1>

              <p className="text-white text-[15px] sm:text-[20px]">
                Do you know you can enjoy Bitcoin cloud mining plans at low
                hashrates? Sounds good, right? Then check out 1BitUp.
              </p>

              <p className="text-white text-[15px] sm:text-[20px] mt-10">
                But what's more about the Bitcoin mining cloud? Let's find out.
              </p>

              <div className="flex flex-row items-center mt-4 gap-5 max-sm:flex-wrap">
                <LandingCtaButton label="Sign up" />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
