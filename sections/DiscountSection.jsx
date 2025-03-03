import MiningPlanCard from "@/components/MiningPlanCard";
import PlanCard from "@/components/PlanCard";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import { BsArrowRight } from "react-icons/bs";


const DiscountSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(90deg,#4c2975_0%,#2b1842_15%,#2b1842_85%,#4c2975_100%)] py-[64px] mt-[250px]">
      <SectionWrapper pad={false}>
        <div className="flex gap-[32px] max-w-[1300px]">
          <div className="flex flex-col flex-[1_1]">
            <h1 className="text-white text-[72px] font-bold">Discounts</h1>
            <h2 className="text-[#ffc55a] text-[48px] font-bold">From 5 to 40%</h2>
            <p className="text-white text-[18px]">Explore our top-tier offers and start your journey with our crypto mining cloud service today</p>
            <BsArrowRight className="text-white mt-5" size={30}/>

          </div>

          <div className="w-full flex flex-row overflow-x-scroll no-scrollbar gap-[16px]">
            <MiningPlanCard/>
            <MiningPlanCard/>
            <MiningPlanCard/>
            <MiningPlanCard/>
            <MiningPlanCard/>
            <MiningPlanCard/>

          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default DiscountSection;
