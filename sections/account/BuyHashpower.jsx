import BalanceOffer from "@/components/BalanceOffer";
import MiningPlanCard from "@/components/MiningPlanCard";
import RevenueStatList from "@/components/RevenueStatList";
import React from "react";

const BuyHashpower = () => {
  const planNameList = ["Classic", "Steady", "SALE"];
  return (
    <section className="w-full">
      <RevenueStatList />
      <BalanceOffer />

      <div className="w-full">
        <h3 className="text-[26px] text-darkmuted font-semibold mt-5">
          Bitcoin mining plans
        </h3>
        <div className="flex flex-row items-center gap-7 mt-5">
          {planNameList.map((name) => {
            return (
              <p className="cursor-pointer text-[16px] font-normal text-[#9a9a9a] hover:text-darkmuted hover:underline" key={name}>
                {name}
              </p>
            );
          })}
        </div>

        <div className="w-full flex flex-row items-center overflow-x-scroll gap-5 mt-4">
          <MiningPlanCard />
          <MiningPlanCard />
          <MiningPlanCard />
          <MiningPlanCard />
          <MiningPlanCard />
          <MiningPlanCard />
        </div>
      </div>
    </section>
  );
};

export default BuyHashpower;
