"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MTHead from "./MTHead";
import { Button } from "@/components/ui/button";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import CircleSpinner from "./CircleSpinner";

const ActivePlans = () => {
  const [plansList, setPlansList] = useState([]);
  const plans = [
    { name: "Classic", hashpower: "0 TH/s", income: "0 BTC", usd: "0$" },
    { name: "Steady", hashpower: "0 TH/s", income: "0 BTC", usd: "0$" },
    { name: "Best Offers", hashpower: "0 TH/s", income: "0 BTC", usd: "0$" },
  ];

  const { mutate, isLoading } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/active-plans/"),
    (response) => {
      setPlansList(response.data);
    },
    (error) => {
      toast.error("Failed to fetch active plans");
    }
  );

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return <CircleSpinner />;
  }
  return (
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
            {plansList.map((plan, index) => (
              <TableRow key={index}>
                <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                  {plan.category}
                </TableCell>
                <TableCell className="text-[#8e61bf] text-[20px] font-semibold">
                  {plan.hashpower}
                </TableCell>
                <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                  {plan.income_btc}
                </TableCell>
                <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                  {plan.income_usd}
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
  );
};

export default ActivePlans;
