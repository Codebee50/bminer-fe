"use client";
import BalanceOffer from "@/components/BalanceOffer";
import MiningPlanCard from "@/components/MiningPlanCard";
import PageLoader from "@/components/PageLoader";
import RevenueStatList from "@/components/RevenueStatList";
import { makeApiUrl } from "@/constants/beroute";
import useFetchRequest from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BuyHashpower = () => {
  const planNameList = ["Classic", "Steady", "SALE"];
  const [planList, setPlanList] = useState([]);

  const { mutate: getPlans, isLoading: isGettingPlans } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/plans/"),
    (response) => {
      setPlanList(response.data.results);
    },
    (error) => {
      toast.error("Failed to get plans");
    }
  );

  useEffect(() => {
    getPlans();
  }, []);

  if (isGettingPlans) {
    return <PageLoader height={40} />;
  }
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
              <p
                className="cursor-pointer text-[16px] font-normal text-[#9a9a9a] hover:text-darkmuted hover:underline"
                key={name}
              >
                {name}
              </p>
            );
          })}
        </div>

        <div className="w-full flex flex-row items-center overflow-x-scroll no-scrollbar gap-5 mt-4">
          {planList.map((plan, index) => {
            return <MiningPlanCard {...plan} key={`plan-da-${index}`} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BuyHashpower;
