import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const HowItWorks = () => {
  const howList = [
    {
      title: "Sign up to Bitcoin miner",
      description: "Access Bitcoin miner cloud mining service and Sign In",
    },
    {
      title: "Get your unique referral link",
      description:
        "Navigate our platform, access Referral menu and download your bitcoin mining referral code or link",
    },
    {
      title: "Share it with your friends",
      description:
        "Share the link with your friends. When they buy any contract with your referral link you shall get up to 6% from the first contract and 2% from subsequent purchase.",
    },
  ];

  return (
    <SectionWrapper pad={false}>
      <div className="w-full">
        <div className="w-full  flex flex-col lg:flex-row  items-stretch bg-[#6835a0] p-[60px] rounded-[24px] justify-between sm:gap-[50px]">
          <div className="flex flex-col gap-[30px] flex-[0_1_465px]">
            <h2 className="text-white text-[48px] font-semibold">
              How does it work? 3 easy steps
            </h2>

            <div className="sm:w-[465px] h-[301px]">
              <img src="/howrefworks.avif" alt="" />
            </div>
          </div>

          <div className="flex flex-col h-full justify-between gap-[50px] flex-[0_1_450px]">
            {howList.map((howItem) => (
              <div className="flex flex-col br450:flex-row gap-[25px] border-b border-b-[#9e9e9e] pb-[40px]" key={howItem.title}>
                <img src="/eclipse.svg" className="w-[40px]" alt="" />
                <div className="flex flex-col">
                  <p className="font-semibold text-[24px] text-white">{howItem.title}</p>
                  <p className="text-[16px] text-white">
                    {howItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
