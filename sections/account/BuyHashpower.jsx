"use client";
import BalanceOffer from "@/components/BalanceOffer";
import CircleSpinner from "@/components/CircleSpinner";
import MiningPlanCard from "@/components/MiningPlanCard";
import PageLoader from "@/components/PageLoader";
import RevenueStatList from "@/components/RevenueStatList";
import SaleMiningPlanCard from "@/components/SaleMiningPlanCard";
import SteadyMiningPlanCard from "@/components/SteadyMiningPlanCard";
import { makeApiUrl } from "@/constants/beroute";
import useFetchRequest from "@/hooks/useFetch";
import { handleGenericError } from "@/utils/errorHandler";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BuyHashpower = () => {
  const planNameList = ["Classic", "Steady", "SALE"];
  const [planList, setPlanList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const { mutate: getPlans, isLoading: isGettingPlans } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/plans/"),
    (response) => {
      setPlanList(response.data.results);
    },
    (error) => {
      toast.error("Failed to get plans");
    }
  );

  const { mutate: getCategories, isLoading: isGettingCategories } =
    useFetchRequest(
      makeApiUrl("/api/v1/dashboard/plan-categories/"),
      (response) => {
        setCategories(response.data.results);
        setSelectedCategory(response.data.results?.[0]?.id);
      },
      (error) => {
        toast.error(handleGenericError(error));
      }
    );

  useEffect(() => {
    getPlans();
    getCategories();
  }, []);

  const getCategoryForId = (categoryId) => {
    return categories.find((cat) => cat.id == categoryId);
  };

  const getComponentForPlan = (categoryId, plan) => {
    const category = getCategoryForId(categoryId);
    if (category?.name == "classic") return <MiningPlanCard {...plan} />;

    if (category?.name == "steady") return <SteadyMiningPlanCard {...plan} />;

    if (category?.name == "sale") return <SaleMiningPlanCard {...plan} />;

    return <p className="opacity-65">Unimplemented</p>;
  };

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

        {isGettingCategories ? (
          <CircleSpinner />
        ) : (
          <div className="flex flex-row items-center gap-7 mt-5">
            {categories.map((category) => {
              return (
                <p
                  className={`cursor-pointer text-[16px] font-normal text-[#9a9a9a] hover:text-darkmuted hover:underline ${
                    category.id == selectedCategory
                      ? "underline text-darkmuted"
                      : ""
                  }`}
                  key={category.display_name}
                  onClick={setSelectedCategory.bind(null, category.id)}
                >
                  {category.display_name}
                </p>
              );
            })}
          </div>
        )}

        <div className="w-full flex flex-row items-center overflow-x-scroll no-scrollbar gap-5 mt-4">
          {planList
            .filter((plan) => plan.category == selectedCategory)
            .map((plan) => {
              return (
                <div key={`mining-${plan.id}`}>
                  {getComponentForPlan(plan.category, plan)}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default BuyHashpower;
