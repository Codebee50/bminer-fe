"use client";
import React, { useEffect, useState } from "react";
import MiningPlanCard from "./MiningPlanCard";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import { handleGenericError } from "@/utils/errorHandler";
import PageLoader from "./PageLoader";
import SteadyMiningPlanCard from "./SteadyMiningPlanCard";
import SaleMiningPlanCard from "./SaleMiningPlanCard";

const PlanList = ({ category = "all" }) => {
  const [planList, setPlanList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [requestedCategory, setRequestedCategory] = useState(null);

  const { mutate: getPlans, isLoading } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/plans/"),
    (response) => {
      setPlanList(response.data.results);
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const { mutate: getCategories, isLoading: isGettingCategories } =
    useFetchRequest(
      makeApiUrl("/api/v1/dashboard/plan-categories/"),
      (response) => {
        setCategories(response.data.results);

        const requestedCategory =
          response.data.results.find(
            (cat) => cat.name == category.toLowerCase()
          ) || null;

        console.log(response.data.results);
        setRequestedCategory(requestedCategory);
      },
      (error) => {
        toast.error(handleGenericError(error));
      }
    );

  const getComponentForPlan = (plan) => {
    const fitted = category.toLowerCase();
    if (fitted == "classic") return <MiningPlanCard {...plan} />;

    if (fitted == "steady") return <SteadyMiningPlanCard {...plan} />;

    if (fitted == "sale") return <SaleMiningPlanCard {...plan} />;

    return <p className="opacity-65">Unimplemented</p>;
  };

  useEffect(() => {
    getPlans();
    getCategories();
  }, []);

  if (isLoading || isGettingCategories) {
    return <PageLoader />;
  }
  return (
    <div className="w-full flex flex-row overflow-x-scroll no-scrollbar gap-[16px]">
      {planList
        .filter((plan) => plan.category == requestedCategory?.id)
        .map((plan) => {
          return <div key={plan.id}>{getComponentForPlan(plan)}</div>;
        })}
    </div>
  );
};

export default PlanList;
