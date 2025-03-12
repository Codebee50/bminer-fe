import React from "react";
import TopNav from "@/components/TopNav";
import Hero from "@/sections/cloud-mining/Hero";
import SpecialOffers from "@/sections/cloud-mining/SpecialOffers";
import WhyChooseUs from "@/sections/cloud-mining/WhyChooseUs";
import FeaturesSection from "@/sections/cloud-mining/FeaturesGrid";
import CloudMiningPlans from "@/sections/cloud-mining/CloudMiningPlans";
import ProfitCalculator from "@/components/ProfitCalculator";
import Footer from "@/components/Footer";
import CloudMiningSteps from "@/sections/cloud-mining/CloudMiningSteps";
import FAQSection from "@/sections/FaqSection";
const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />
      <Hero />
      <SpecialOffers />
      <WhyChooseUs />
      <FeaturesSection />
      <CloudMiningPlans />
      <ProfitCalculator />
      <CloudMiningSteps />
      <div className="w-full bg-[#f8f8f8]">
        <FAQSection />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
