import MiningPlanCard from "@/components/MiningPlanCard";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const PlansDisplay = () => {
  return (
    <SectionWrapper pad={false}>
      <div className="flex flex-col">
        <h2 className="text-[40px] text-[#373737] font-semibold text-center mb-[15px]">
          Choose the perfect package for you!
        </h2>
        <p className="text-[20px] text-center text-fivebgrey">
          Purchase a cryptocurrency mining contract today and start earning
          tomorrow with your first payout!
        </p>

        <div className="flex flex-row gap-[16px] mt-20">
          <MiningPlanCard />
          <MiningPlanCard />
          <MiningPlanCard />
          <MiningPlanCard />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PlansDisplay;
