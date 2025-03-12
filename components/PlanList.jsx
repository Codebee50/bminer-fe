"use client";
import React, { useEffect, useState } from "react";
import MiningPlanCard from "./MiningPlanCard";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import { handleGenericError } from "@/utils/errorHandler";
import PageLoader from "./PageLoader";
import SteadyMiningPlanCard from "./SteadyMiningPlanCard";

const PlanList = () => {
  const [planList, setPlanList] = useState([]);
  const { mutate: getPlans, isLoading } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/plans/"),
    (response) => {
      console.log(response.data.results);
      setPlanList(response.data.results);
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  useEffect(() => {
    getPlans();
  }, []);

  //   TODO: fetch only steady plans
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="w-full flex flex-row overflow-x-scroll no-scrollbar gap-[16px]">
      {planList.map((plan) => {
        return <SteadyMiningPlanCard {...plan} />;
      })}
    </div>
  );
};

export default PlanList;
