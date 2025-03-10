import React from "react";
import { useState, useEffect } from "react";
import RegButton from "@/components/RegButton";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import { useSearchParams } from "next/navigation";
import usePostRequest from "@/hooks/usePost";
import { toast } from "react-toastify";
import { handleGenericError } from "@/utils/errorHandler";
import { useRouter } from "next/navigation";
const BalancePayment = ({ cryptoPrices }) => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [plan, setPlan] = useState(null);
  const [balances, setBalances] = useState(null);
  const router = useRouter();

  const { mutate: getBalance, isLoading: isGettingBalance } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/balance/"),
    (response) => {
      setBalances(response.data);
    },
    (error) => {
      toast.error("Error getting balances");
    }
  );

  const searchParams = useSearchParams();
  const handleCheckedChanged = (event) => {
    setHasAgreed(event.target.checked);
  };

  const { mutate: getPlan, isLoading: isGettingPlan } = useFetchRequest(
    makeApiUrl(`/api/v1/dashboard/plans/${searchParams.get("id")}/`),
    (response) => {
      setPlan(response.data);
    },
    (error) => [toast.error(handleGenericError(error))]
  );

  const getPriceToPay = () => {
    return parseFloat(plan?.price) * parseFloat(searchParams.get("q"));
    // const equivalentUsd =
    //   (parseFloat(searchParams.get("p")) || 0) / (cryptoPrices["btc"] || 0);

    // // return equivalentUsd / (cryptoPrices[selectedWalletType] || 0);
    // return equivalentUsd;
  };

  const { mutate: purchasePlan, isLoading: isPurchasing } = usePostRequest(
    makeApiUrl(`/api/v1/dashboard/plans/purchase/${searchParams.get("id")}/`),
    (response) => {
      toast.success("Plan purchased successfully");
      router.push("/accounts/my-contracts");
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const handlePurchaseClicked = () => {
    if ((parseFloat(balances?.balance_btc) || 0) <= 0) {
      toast.error("Please topup your account");
      return;
    }
    const reqBody = {
      quantity: searchParams.get("q"),
      entered_amount_btc: getPriceToPay(),
      entered_hash: parseFloat(searchParams.get("hashpower")),
    };

    purchasePlan(reqBody);
  };

  useEffect(() => {
    getPlan();
    getBalance();
  }, []);
  return (
    <div className="bg-white rounded-[16px] p-[20px]">
      <div className="flex flex-col gap-[20px]">
        <p className="text-[#aaa] text-[14px]">
          Pay using your Bitcoinminner balance
        </p>

        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-[#5b5b5b] text-[18px] font-medium">
            Your current balance
          </p>

          <p className="text-purple500 text-[24px] font-semibold">
            {balances?.available_btc} BTC
          </p>
        </div>

        <div className="flex flex-row items-center w-full justify-between mt-5 gap-4 flex-wrap">
          <RegButton
            label={`Pay ${getPriceToPay()}`}
            isDisabled={!hasAgreed}
            onClick={handlePurchaseClicked}
            isLoading={isPurchasing}
          />

          <div className="flex flex-row items-center gap-1">
            <input
              type="checkbox"
              name="agree"
              id=""
              onChange={handleCheckedChanged}
            />
            <label htmlFor="agree" className="text-[#aaa] underline">
              I agree with terms of use
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalancePayment;
