import TopNav from "@/components/TopNav";
import ReferralHero from "@/sections/referral/ReferralHero";
import React from "react";
import Footer from "@/components/Footer";
import HowToSuccessful from "@/sections/referral/HowToSuccessful";
import HowItWorks from "@/sections/referral/HowItWorks";
import CanEarn from "@/sections/referral/CanEarn";
import TermsOfUse from "@/sections/referral/TermsOfUse";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />
      <ReferralHero />

      <div className="flex w-full flex-col items-center gap-[100px] mt-[100px]">
        <HowItWorks />
        <CanEarn />
        <HowToSuccessful />

        <TermsOfUse />

        <Footer />
      </div>
    </div>
  );
};

export default Page;
