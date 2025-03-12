"use client";

import React from "react";
import LandingCtaButton from "@/components/LandingCtaButton";
import { useRouter } from "next/navigation";

const ReferralHero = () => {
  const router = useRouter();
  return (
    <section className="w-full min-h-screen br1270:h-screen">
      <div className="flex items-center justify-center bg-primaryPurple px-[20px] sm:px-[50px] relative bg-no-repeat bg-cover w-full h-full max-[1270px]:py-[30px]">
        <span className="block overflow-hidden absolute inset-0 w-full h-full bg-red-50">
          <img
            src="/referralbanner.webp"
            alt=""
            className="w-full h-full absolute object-cover overflow-clip"
          />
        </span>

        <div className="w-full max-w-[1300px] sm:px-[50px]">
          <div className="flex max-[1270px]:flex-col justify-between gap-[64px] max-w-[700px]">
            <div className="flex flex-col justify-center relative gap-[8px] flex-[5_1_0%]">
              <h1 className="text-darkmuted text-[50px] sm:text-[60px] font-semibold">
                1BitUP Referral Program
              </h1>

              <p className="text-darkmuted text-[15px] sm:text-[20px]">
                Unlock the power of passive income with our innovative cloud
                mining referral program!
              </p>

              <div className="flex flex-row items-center mt-4 gap-5 max-sm:flex-wrap">
                <LandingCtaButton
                  label="Sign up"
                  onClick={router.push.bind(null, "/sign-up")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralHero;
