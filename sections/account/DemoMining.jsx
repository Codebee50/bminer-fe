"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MTHead from "@/components/MTHead";
import DemoDurationTab from "@/components/DemoDurationTab";
import MiningDurationSelector from "@/components/MiningDurationSelector";
import RegButton from "@/components/RegButton";
import usePostRequest from "@/hooks/usePost";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import { handleGenericError } from "@/utils/errorHandler";
import useFetchRequest from "@/hooks/useFetch";
import CircleSpinner from "@/components/CircleSpinner";
import { formatDate } from "@/constants/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import DemoMiningDetail from "@/components/DemoMiningDetail";

const DemoMining = () => {
  const inputRef = useRef();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [miningPlans, setMiningPlans] = useState([]);

  const [detailOpen, setDetailOpen] = useState(false);

  const handleValueChanged = (selectedTab) => {
    if (inputRef.current) {
      inputRef.current.value = selectedTab.defaultHp;
      setSelectedPlan(selectedTab);
    }
  };

  const { mutate: getPlans, isLoading: isGettingPlans } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/demo-mining/"),
    (response) => {
      setMiningPlans(response.data);
    },
    (error) => {
      toast.error("Failed to get mining plans");
    }
  );

  const { mutate, isLoading } = usePostRequest(
    makeApiUrl("/api/v1/dashboard/demo-mining/"),
    (response) => {
      toast.success("Plan submitted successfully");
      getPlans();
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const handleFormSubmitted = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set("duration_days", selectedPlan?.durationDays || 7);
    mutate(formData);
  };


  useEffect(() => {
    getPlans();
  }, []);
  return (
    <div className="flex flex-col w-full">
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent
          className={"bg-[#fafafa] w-full md:min-w-[80%] lg:min-w-[60%]"}
        >
          <DialogHeader className={"w-full"}>
            <DialogTitle className={"hidden"}>Demo mining detail</DialogTitle>
            <DemoMiningDetail miningPlans={miningPlans} />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <h2 className="text-darkmuted font-semibold text-[26px]">Demo mining</h2>

      {isGettingPlans ? (
        <div className="flex flex-col items-center justify-center w-full">
          <CircleSpinner />
        </div>
      ) : (
        <div>
          <Table className={"bg-[#fafafa] rounded-2xl p-[22px]"}>
            <TableHeader>
              <TableRow className={"p-[22px]"}>
                <MTHead className={"p-[30px]"} label={"Contact"}></MTHead>
                <MTHead className={"p-[30px]"} label={"Price"}></MTHead>
                <MTHead className={"p-[22px]"} label={"My Hashpower"}></MTHead>
                <MTHead label={"Start date"}></MTHead>
                <MTHead label={"End date"}></MTHead>
              </TableRow>
            </TableHeader>
            <TableBody className={"bg-[#fafafa] p-[22px]"}>
              {miningPlans && (
                <TableRow className={"cursor-pointer"} onClick={setDetailOpen}>
                  <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                    #{miningPlans.id}
                  </TableCell>
                  <TableCell className="text-[#8e61bf] text-[20px] font-semibold">
                    {miningPlans?.price}
                  </TableCell>
                  <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                    {miningPlans.hashpower}TH/s
                  </TableCell>
                  <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                    {formatDate(miningPlans.start_date)}
                  </TableCell>
                  <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                    {formatDate(miningPlans.end_date)}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {!miningPlans && (
        <div className="w-full flex flex-col items-center justify-center mt-5">
          <button className="text-[16px] border-[2px] py-[14px] px-[25px] font-medium min-w-[97px] text-[#815aac] border-[#815aac] rounded-[12px]">
            Bitcoin mining
          </button>

          <div className="m-9 flex items-center justify-center flex-col">
            <MiningDurationSelector onValueChanged={handleValueChanged} />

            <form
              onSubmit={handleFormSubmitted}
              className="w-full mt-[30px] max-w-[347px] flex flex-col items-center justify-center bg-white rounded-[20px] overflow-hidden shadow-[0_0_24px_rgba(71,56,180,0.21)]"
            >
              <div className="w-full flex flex-col items-center justify-center bg-white relative">
                <div className="pb-[17px] w-[85%] flex flex-col mt-[8px]">
                  <p className="text-[#848199] text-[16px]">Hashpower, TH/s</p>
                  <div className="mt-3">
                    <input
                      type="number"
                      name="hashpower"
                      id=""
                      defaultValue={100}
                      className="text-[20px] w-full py-[10px] px-[18px] border border-[#848199] rounded-[12px]"
                      ref={inputRef}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full min-h-[73px] bg-[#ffcc4f] py-[10px] px-[13px] rounded-b-[20px] flex items-center justify-center">
                <RegButton label="Start" isLoading={isLoading} />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoMining;
