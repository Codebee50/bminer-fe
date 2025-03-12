import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import ExclusiveTwelve from "@/sections/steady/ExclusiveTwelve";
import ExploreSteadyPlans from "@/sections/steady/ExploreSteadyPlans";
import HowItWorks from "@/sections/steady/HowItWorks";
import PlanGuarantee from "@/sections/steady/PlanGuarantee";
import SteadyHero from "@/sections/steady/SteadyHero";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />

      <SteadyHero />
      <PlanGuarantee />
      <ExploreSteadyPlans />
      <HowItWorks />
      <ExclusiveTwelve/>

      {/* TODO: add last section */}

      <Footer />
    </div>
  );
};

export default Page;
