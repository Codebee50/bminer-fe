import TopNav from "@/components/TopNav";
import ReferralHero from "@/sections/referral/ReferralHero";
import React from "react";
import Footer from "@/components/Footer";
import HowToSuccessful from "@/sections/referral/HowToSuccessful";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />
      <ReferralHero />
      <HowToSuccessful />
      <Footer />
    </div>
  );
};

export default Page;
