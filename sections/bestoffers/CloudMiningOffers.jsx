import PlanList from "@/components/PlanList";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const CloudMiningOffers = () => {
  return (
    <SectionWrapper>
      <div className="w-full flex flex-col">
        <h1 className="text-[30px] md:text-[48px] text-darkmuted font-semibold text-center">
          Cloud mining offers
        </h1>

        <PlanList category="sale" />

        <div className="p-[40px] rounded-[24px] border border-[#b5b5b5] flex flex-col mt-[100px] gap-5">
          <h2 className="text-[48px] text-darkmuted font-semibold">
            Disclaimer
          </h2>

          <p className="text-[#5b5b5b] text-[20px]">
            These calculations offer forward-looking insights, enabling you to
            model potential income based on selected conditions. This
            information is derived from data currently available to Bitcoin miner,
            including the current mining difficulty. The projections are based
            on the forecasted price of BTC. It's important to note that this
            information does not guarantee future performance and should not be
            overly relied upon due to inherent uncertainties.
          </p>


        </div>
      </div>
    </SectionWrapper>
  );
};

export default CloudMiningOffers;
