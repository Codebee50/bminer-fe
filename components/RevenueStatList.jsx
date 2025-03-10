import React from "react";
import RevenueStat from "./RevenueStat";
import { useSelector } from "react-redux";

const RevenueStatList = () => {
  const { dashboard } = useSelector((state) => state.auth);
  const revenueStats = [
    { title: "Total income", value: "0 BTC" },
    { title: "Total payout", value: "0 BTC" },
    { title: "Yesterday’s revenue", value: "0 BTC" },
    { title: "Today’s est. revenue", value: "0 BTC" },
  ];
  return (
    // <div className="w-full grid grid-cols-2 br770:grid-cols-4 justify-between gap-3">
    //   {revenueStats.map((rev) => (
    //     <RevenueStat {...rev} key={rev.title} />
    //   ))}
    // </div>

    <div className="w-full grid grid-cols-2 br770:grid-cols-4 justify-between gap-3">
      <RevenueStat title={"Total income"}  value={dashboard?.balance?.total_earnings} />
      <RevenueStat title={"Total payout"}  value={dashboard?.balance?.total_withdrawals} />
      <RevenueStat title={"Weekly est. revenue"}  value={dashboard?.mining?.earnings_last_7_days} />
      <RevenueStat title={"Active contracts"}  value={dashboard?.mining?.active_contracts} />

      {/* {revenueStats.map((rev) => (
        <RevenueStat {...rev} key={rev.title} />
      ))} */}
    </div>
  );
};

export default RevenueStatList;
