import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import CalculatorHero from "@/sections/calculator/CalculatorHero";
import HowDoesCalculator from "@/sections/calculator/HowDoesCalculator";
import HowHashRateWorks from "@/sections/calculator/HowHashRateWorks";
import Significance from "@/sections/calculator/Significance";
import HeroSection from "@/sections/HeroSection";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />
      <CalculatorHero />

      <HowHashRateWorks />
      <HowDoesCalculator />
      <Significance />

      <Footer />
    </div>
  );
};

export default Page;
