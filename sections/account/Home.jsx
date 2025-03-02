import RevenueStat from "@/components/RevenueStat";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import MTHead from "@/components/MTHead";
import RevenueStatList from "@/components/RevenueStatList";
import BalanceOffer from "@/components/BalanceOffer";

const Home = () => {
  const revenueStats = [
    { title: "Total income", value: "0 BTC" },
    { title: "Total payout", value: "0 BTC" },
    { title: "Yesterday’s revenue", value: "0 BTC" },
    { title: "Today’s est. revenue", value: "0 BTC" },
  ];

  const plans = [
    { name: "Classic", hashpower: "0 TH/s", income: "0 BTC", usd: "0$" },
    { name: "Steady", hashpower: "0 TH/s", income: "0 BTC", usd: "0$" },
    { name: "Best Offers", hashpower: "0 TH/s", income: "0 BTC", usd: "0$" },
  ];
  return (
    <section className="w-full">
      <RevenueStatList />
      <BalanceOffer />

      <div className="w-full flex flex-col gap-[15px]">
        <p className="text-darkmuted text-[20px] font-semibold">Active plans</p>
        <div>
          <Table className={"bg-[#fafafa] rounded-2xl p-[22px]"}>
            <TableHeader>
              <TableRow className={"p-[22px]"}>
                <MTHead className={"p-[30px]"} label={"My plan"}></MTHead>
                <MTHead className={"p-[22px]"} label={"My Hashpower"}></MTHead>
                <MTHead label={"Income"}></MTHead>
                <MTHead label={"USD"}></MTHead>
                <MTHead></MTHead> {/* Empty for Buy More Button */}
              </TableRow>
            </TableHeader>
            <TableBody className={"bg-[#fafafa] p-[22px]"}>
              {plans.map((plan, index) => (
                <TableRow key={index}>
                  <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                    {plan.name}
                  </TableCell>
                  <TableCell className="text-[#8e61bf] text-[20px] font-semibold">
                    {plan.hashpower}
                  </TableCell>
                  <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                    {plan.income}
                  </TableCell>
                  <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                    {plan.usd}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      className="border-purple300 text-purple300 bg-transparent"
                    >
                      Buy More
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Home;
