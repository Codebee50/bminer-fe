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
import HashRatePlans from "@/sections/cloud-mining/HashRatePlans";
const Page = () => {
  const faqs = [
    {
      question: "How will I receive my earnings?",
      answer:
        "Your earnings will be automatically credited to your account wallet on our platform. From there, you can choose to withdraw them to your personal cryptocurrency wallet or reinvest them in new mining contracts. We process withdrawals within 24-48 hours for security purposes.",
    },
    {
      question: "When can I expect to receive my income?",
      answer:
        "Mining rewards are calculated and distributed daily. You can expect to see your earnings updated in your account every 24 hours. The exact timing may vary depending on network conditions and mining difficulty.",
    },
    {
      question: "Is it possible to cancel an accidental purchase?",
      answer:
        "Yes, you can request to cancel an accidental purchase within 24 hours of the transaction. Please contact our support team immediately. Note that cancellation might be subject to processing fees and market conditions.",
    },
    {
      question: "Is participating in cloud mining profitable?",
      answer:
        "Profitability in cloud mining depends on various factors including Bitcoin price, mining difficulty, and electricity costs. While we strive to maintain competitive rates, returns can vary. We recommend reviewing our profit calculator and market conditions before investing.",
    },
    {
      question: "What are the risks involved in cloud mining?",
      answer:
        "Like any investment, cloud mining carries certain risks. These include market volatility, changes in mining difficulty, and operational risks. We mitigate these through professional management and transparent operations, but it's important to understand that returns are not guaranteed.",
    },
    {
      question: "What is Cloud Mining?",
      answer:
        "Cloud mining is a mechanism to mine cryptocurrencies like Bitcoin without having to install and maintain mining hardware yourself. Instead, you purchase mining power from our professional mining facilities, and we handle all the technical aspects while you receive the mining rewards.",
    },
  ];
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
      <HashRatePlans />
      <div className="w-full bg-[#f8f8f8]">
        <FAQSection faqs={faqs} />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
