import BestOffersHero from "@/sections/bestoffers/BestOffersHero";
import React from "react";
import TopNav from "@/components/TopNav";
import CloudMiningOffers from "@/sections/bestoffers/CloudMiningOffers";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />
      <BestOffersHero />
      <CloudMiningOffers />
    </div>
  );
};

export default Page;
