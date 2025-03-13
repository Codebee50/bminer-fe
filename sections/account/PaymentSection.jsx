"use client";
import React, { useEffect, useState } from "react";
import CryptoWallet from "./payment/CryptoWallet";
import ContractDetailStat from "@/components/ContractDetailStat";
import BalancePayment from "./payment/BalancePayment";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import axios from "axios";
import { toast } from "react-toastify";
import CircleSpinner from "@/components/CircleSpinner";
import { useSearchParams } from "next/navigation";
import { handleGenericError } from "@/utils/errorHandler";

const PaymentSection = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  const paymentOptionsList = [
    {
      name: "Crypto",
      idValue: 0,
    },
    {
      name: "Balance",
      idValue: 1,
    },
  ];
  const [cryptoPrices, setCryptoPrices] = useState(null);

  const searchParams = useSearchParams();
  const [plan, setPlan] = useState(null);

  const { mutate: fetchCryptoPrices, isLoading: isGettingCryptoPrices } =
    useFetchRequest(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd",
      (response) => {
        const { data } = response;
        const btcPrice = data.bitcoin.usd;
        const ethPrice = data.ethereum.usd;
        const usdtPrice = data.tether.usd; // USDT is pegged to 1 USD
        setCryptoPrices({
          btc: btcPrice, // Convert USD to BTC
          eth: ethPrice, // Convert USD to ETH
          usdt_erc20: usdtPrice, // 1 USDT ≈ 1 USD
        });
      },
      (error) => {
        toast.error("Error fetching crypto prices");
      }
    );

  const { mutate: getPlan, iLoading: isGettingPlan } = useFetchRequest(
    makeApiUrl(`/api/v1/dashboard/plans/${searchParams.get("id")}`),
    (response) => {
      setPlan(response.data);
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );
  const sectionMapping = {
    0: <CryptoWallet cryptoPrices={cryptoPrices} plan={plan} />,
    1: <BalancePayment cryptoPrices={cryptoPrices} plan={plan} />,
  };

  useEffect(() => {
    fetchCryptoPrices();
    getPlan();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-darkmuted font-semibold text-[26px]">Payment</h2>

      <div className="flex flex-col rounded-[16px] bg-[#f8f8f8] p-[30px]">
        <div className="flex flex-col gap-[30px] max-w-[602px]">
          <div className="flex flex-col">
            <h2 className="text-darkmuted font-semibold text-[20px]">
              Payment method
            </h2>
            <div className="flex flex-row items-center gap-[16px] mt-5">
              {paymentOptionsList.map((option) => {
                return (
                  <div
                    className={`w-full cursor-pointer text-center  px-[15px] py-[20px] text-[16px] rounded-[16px]  ${
                      option.idValue == selectedSection
                        ? "bg-[#815aac] text-white"
                        : "border border-[#9a9a9a] text-[#aaa]"
                    } `}
                    key={option.name}
                    onClick={setSelectedSection.bind(null, option.idValue)}
                  >
                    <p>{option.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {isGettingCryptoPrices ? (
            <CircleSpinner />
          ) : (
            cryptoPrices && (
              <div className="w-full">{sectionMapping[selectedSection]}</div>
            )
          )}

          <div className="w-full flex flex-col gap-[15px] flex-wrap">
            <h4 className="font-medium">Contract details</h4>

            {isGettingPlan ? (
              <CircleSpinner />
            ) : (
              <div className="bg-white rounded-[16px] p-[20px]">
                <div className="p-[20px] rounded-[6px] bg-purple400 flex flex-row justify-between items-center">
                  <ContractDetailStat
                    label={"Duration"}
                    value={`${plan?.duration_months || "-"} months`}
                  />
                  <ContractDetailStat
                    label={"Hashpower"}
                    value={`${plan?.hashpower || "-"} TH/s`}
                  />
                  <ContractDetailStat
                    label={"Price"}
                    value={`$ ${
                      parseFloat(plan?.least_entry_amount_usdt) || "-"
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
