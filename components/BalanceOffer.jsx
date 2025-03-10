import { makeApiUrl } from "@/constants/beroute";
import useFetchRequest from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputForm from "./InputForm";
import RegButton from "./RegButton";
import usePostRequest from "@/hooks/usePost";
import { handleGenericError } from "@/utils/errorHandler";

const BalanceOffer = () => {
  const [balances, setBalances] = useState(null);
  const [weekOffer, setWeekOffer] = useState(null);

  const { mutate, isLoading } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/balance/"),
    (response) => {
      setBalances(response.data);
    },
    (error) => {
      toast.error("Error getting balances");
    }
  );

  const { mutate: getPlans, isLoading: isGettingPlans } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/plans/"),
    (response) => {
      const plans = response.data.results;

      // Select a random plan if there are any plans available
      if (plans.length > 0) {
        const randomPlan = plans[Math.floor(Math.random() * plans.length)];
        setWeekOffer(randomPlan);
      }
    },
    (error) => {
      toast.error("Failed to get plans");
    }
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { mutate: withdrawBtc, isLoading: isWithdrawingBtc } = usePostRequest(
    makeApiUrl("/api/v1/dashboard/withdraw/"),
    (response) => {
      toast.success("BTC Withdrawal request placed successfully");
      setIsDialogOpen(false); // Close the dialog
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  function addTenPercent(value) {
    return (value + 0.1 * value).toFixed(2);
  }

  const handleWithdrawBtc = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    withdrawBtc(formData);
  };

  useEffect(() => {
    mutate();
    getPlans();
  }, []);
  return (
    <div className="grid grid-cols-1 br770:grid-cols-2 items-stretch justify-stretch gap-3 mt-6 w-full ">
      <div className="flex flex-col w-full ">
        <p className="font-semibold text-[20px]">Current balance:</p>

        <div className="flex flex-row border border-[#ececec] p-[30px] rounded-2xl justify-between items-start mt-4 min-h-[180px]">
          <div className="flex flex-col">
            <div className="border-b border-b-[#ececec] pb-[15px]">
              <p className="text-[14px] text-[#5b5b5]">Total assets</p>
              <p className="text-[24px] text-[#815aac] font-semibold">
                {parseFloat(balances?.balance_btc || 0.0)} BTC
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-[#5b5b5]">Current balance</p>
              <p className="text-[24px] text-[#815aac] font-semibold">
                {parseFloat(balances?.balance_usd || 0.0)} $
              </p>
            </div>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button
                disabled={!(balances?.balance_btc && balances?.balance_btc > 0)}
                className="cursor-pointer rounded-[12px] disabled:opacity-20 disabled:cursor-not-allowed p-[14px] min-w-[126px] text-darkmuted border border-darkmuted"
                onClick={() => setIsDialogOpen(true)} // Open dialog when clicked
              >
                Withdraw
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Withdraw BTC</DialogTitle>
                <form
                  className="w-full flex flex-col gap-[15px] mt-5"
                  onSubmit={handleWithdrawBtc}
                >
                  <InputForm
                    label="BTC Address"
                    placeholder="Enter your BTC wallet address"
                    name="btc_address"
                  />
                  <InputForm
                    label="BTC Amount"
                    placeholder="Amount of BTC to withdraw"
                    type="number"
                    name="amount_btc"
                  />
                  <InputForm
                    label="Password"
                    placeholder="Enter your account password"
                    type="password"
                    name="password"
                  />
                  <RegButton
                    label="Withdraw"
                    full={true}
                    isLoading={isWithdrawingBtc}
                  />
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {weekOffer && (
        <div className="flex flex-col w-full">
          <p className="font-semibold text-[20px]">Offer of the week:</p>
          <div className="flex flex-col w-full bg-[#f1eef7] rounded-2xl p-[30px] min-h-[180px] mt-4">
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-[22px] font-medium text-darkmuted">
                {weekOffer?.name}
              </p>

              <div className="bg-[#c43b21] text-[10px] rounded-[12px] py-[6px] px-[15px] font-medium text-white">
                <p>{parseFloat(weekOffer?.least_discount)}% discount</p>
              </div>
            </div>

            <p className="text-[26px] font-bold text-[#815aac]">
              {weekOffer?.category_name}
            </p>

            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="text-purple200 line-through text-[14px]">
                  ${addTenPercent(weekOffer?.least_entry_amount_usdt)}
                </p>
                <p className="text-[30px] text-darkmuted font-extrabold">
                  ${weekOffer?.least_entry_amount_usdt.toFixed(2)}
                </p>
              </div>

              <button className="border border-[#8e61bf] rounded-2xl w-max p-[14px] min-w-[126px] text-[#8e61bf]">
                Buy Now{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BalanceOffer;
