import PlanList from "@/components/PlanList";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const HashRatePlans = () => {
  return (
    <section className="w-full bg-[linear-gradient(90deg,#4c2975_0%,#2b1842_15%,#2b1842_85%,#4c2975_100%)] py-[64px] mt-[30px]">
      <SectionWrapper pad={false}>
        <div className="flex flex-col gap-[32px] max-w-[1300px] max-br1270:flex-col">
          <div className="flex flex-col flex-[1_1]">
            <h1 className="text-white text-[40px] font-medium text-center   ">
              Hashrate plans
            </h1>
          </div>

          <PlanList category="classic" />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HashRatePlans;
