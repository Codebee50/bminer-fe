import MiningPlanCard from "@/components/MiningPlanCard";
import PlanList from "@/components/PlanList";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const PlansDisplay = () => {
  return (
    <SectionWrapper pad={false}>
      <div className="flex flex-col">
        <h2 className="text-[30px] md:text-[40px] text-[#373737] font-semibold text-center mb-[15px]">
          Choose the perfect package for you!
        </h2>
        <p className="text-[15px] md:text-[20px] text-center text-fivebgrey">
          Purchase a cryptocurrency mining contract today and start earning
          tomorrow with your first payout!
        </p>

        <PlanList category="classic" />

        <div className="w-full flex flex-row gap-2 mt-10 max-lg:hidden">
          <a
            href="/cloud-mining"
            className="border border-darkmuted font-medium rounded-[12px] p-[12px] w-full text-[16px] cursor-pointer text-center"
          >
            Discover mining plans that suits you
          </a>
          <a
            href="/steady"
            className="border border-darkmuted bg-darkmuted text-white font-medium rounded-[12px] p-[12px] w-full text-[16px] cursor-pointer text-center"
          >
            Discover Steady plans that suits you
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PlansDisplay;
