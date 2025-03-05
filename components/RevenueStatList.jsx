import React from "react";
import RevenueStat from "./RevenueStat";

const RevenueStatList = () => {
  const revenueStats = [
    { title: "Total income", value: "0 BTC" },
    { title: "Total payout", value: "0 BTC" },
    { title: "Yesterday’s revenue", value: "0 BTC" },
    { title: "Today’s est. revenue", value: "0 BTC" },
  ];
  return (
    <div className="w-full grid grid-cols-2 br770:grid-cols-4 justify-between gap-3">
      {revenueStats.map((rev) => (
        <RevenueStat {...rev} key={rev.title} />
      ))}
    </div>
  );
};

export default RevenueStatList;
