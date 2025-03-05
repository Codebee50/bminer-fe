import { makeApiUrl } from "@/constants/beroute";
import useFetchRequest from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BalanceOffer = () => {
  const [balances, setBalances] = useState(null);

  const { mutate, isLoading } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/balance/"),
    (response) => {
      setBalances(response.data);
      console.log(response);
    },
    (error) => {
      toast.error("Error getting balances");
    }
  );

  useEffect(() => {
    mutate();
  }, []);
  return (
    <div className="grid grid-cols-1 br770:grid-cols-2 items-stretch justify-stretch gap-3 mt-6 w-full ">
      <div className="flex flex-col w-full h-full">
        <p className="font-semibold text-[20px]">Current balance:</p>

        <div className="flex flex-row border border-[#ececec] p-[30px] rounded-2xl justify-between items-start mt-4">
          <div className="flex flex-col">
            <div className="border-b border-b-[#ececec] pb-[15px]">
              <p className="text-[14px] text-[#5b5b5]">Total assets</p>
              <p className="text-[24px] text-[#815aac] font-semibold">
                {parseFloat(balances?.balance_btc || 0.0)} BTC
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-[#5b5b5]">Current balance</p>
              <p className="text-[24px] text-[#815aac] font-semibold">{parseFloat(balances?.balance_usd || 0.0)} $</p>
            </div>
          </div>

          <button
            disabled
            className="cursor-pointer rounded-[12px] disabled:opacity-20 p-[14px] min-w-[126px] text-darkmuted border border-darkmuted"
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full h-full">
        <p className="font-semibold text-[20px]">Offer of the week:</p>
        <div className="flex flex-col w-full bg-[#f1eef7] rounded-2xl p-[30px] min-h-[180px] mt-4">
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-[22px] font-medium text-darkmuted">
              Classic Mining
            </p>

            <div className="bg-[#c43b21] text-[10px] rounded-[12px] py-[6px] px-[15px] font-medium text-white">
              <p>6% discount</p>
            </div>
          </div>

          <p className="text-[26px] font-bold text-[#815aac]">Ultimate</p>

          <div className="w-full flex flex-row justify-between mt-3">
            <div className="flex flex-col">
              <p className="text-purple200 line-through text-[14px]">$420.05</p>
              <p className="text-[30px] text-darkmuted font-extrabold">
                $396.27
              </p>
            </div>

            <button className="border border-[#8e61bf] rounded-2xl w-max p-[14px] min-w-[126px] text-[#8e61bf]">
              Buy Now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceOffer;
