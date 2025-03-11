import RevenueStat from "@/components/RevenueStat";
import React from "react";
import RevenueStatList from "@/components/RevenueStatList";
import BalanceOffer from "@/components/BalanceOffer";
import ActivePlans from "@/components/ActivePlans";

const Home = () => {
  const revenueStats = [
    { title: "Total income", value: "0 BTC" },
    { title: "Total payout", value: "0 BTC" },
    { title: "Yesterday’s revenue", value: "0 BTC" },
    { title: "Today’s est. revenue", value: "0 BTC" },
  ];


  return (
    <section className="w-full">
      <RevenueStatList />
      <BalanceOffer />

      <ActivePlans />
    </section>
  );
};

export default Home;
