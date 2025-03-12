"use client";
import RegButton from "@/components/RegButton";
import React, { useRef, useState } from "react";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { TbCopy } from "react-icons/tb";
import InputForm from "@/components/InputForm";
import QRCode from "react-qr-code";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { handleGenericError } from "@/utils/errorHandler";
import CountdownTimer from "@/components/CountdownTimer";
import usePostRequest from "@/hooks/usePost";
import { useRouter } from "next/navigation";

const CryptoWallet = ({ cryptoPrices }) => {
  const [hasAgreed, setHasAgreed] = useState(false);

  const searchParams = useSearchParams();

  const [confirmPayment, setConfirmPayment] = useState(false);
  const router = useRouter()

  const [addresses, setAddresses] = useState([]);
  const [uniqueWalletTypes, setUniqueWalletTypes] = useState([]);
  const [selectedWalletType, setSelectedWalletType] = useState();
  const [plan, setPlan] = useState(null);

  const { mutate: getManagementWallet, isLoading: isFetchingWallets } =
    useFetchRequest(
      makeApiUrl("/api/v1/payment-wallet/wallets/"),
      (response) => {
        setAddresses(response.data.results);

        const unique = [
          ...new Set(
            response.data.results.map((address) => address.wallet_type)
          ),
        ];
        setUniqueWalletTypes(unique);
        setSelectedWalletType(unique[0]);
      },
      (error) => {
        toast.error("Could not get management wallet addresses");
      }
    );

  const { mutate: getPlan, isLoading: isGettingPlan } = useFetchRequest(
    makeApiUrl(`/api/v1/dashboard/plans/${searchParams.get("id")}/`),
    (response) => {
      setPlan(response.data);
    },
    (error) => [toast.error(handleGenericError(error))]
  );

  const { mutate: purchasePlan, isLoading: isPurchasing } = usePostRequest(
    makeApiUrl(`/api/v1/dashboard/plans/purchase/${searchParams.get("id")}/`),
    (response) => {
      toast.success("Plan purchased successfully");
      router.push("/account/my-contracts");

    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  useEffect(() => {
    getPlan();
    getManagementWallet();
  }, []);

  const handleCheckedChanged = (event) => {
    setHasAgreed(event.target.checked);
  };

  const getPriceToPay = () => {
    const equivalentUsd =
      (parseFloat(searchParams.get("p")) || 0) /
      (cryptoPrices[selectedWalletType] || 0);

    // return equivalentUsd / (cryptoPrices[selectedWalletType] || 0);
    return equivalentUsd * parseFloat(searchParams.get("q"));
  };

  const getWalletAddress = () => {
    const wallets = addresses.filter(
      (address) => address.wallet_type == selectedWalletType
    );
    return wallets[0]?.address || "empty";
  };

  const handlePayClicked = () => {
    setConfirmPayment(true);
  };

  const handleIvePaidClicked = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const reqBody = {
      quantity: searchParams.get("q"),
      entered_amount_btc:
        parseFloat(plan?.price) * parseFloat(searchParams.get("q")),
      entered_hash: parseFloat(searchParams.get("hashpower")),
      transaction_hex: formData.get("entered_hash"),
    };

    purchasePlan(reqBody);
  };

  if (confirmPayment) {
    return (
      <div className="bg-white rounded-[16px] p-[20px]">
        <div className="flex flex-row gap-4 w-full">
          <div className="w-[25%]">
            <div className="w-full bg-white">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={getWalletAddress()}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>

          <div className="w-[75%] flex flex-col gap-[10px]">
            <p className="text-[16px] text-[#848199] font-medium">
              Send {getPriceToPay()} {selectedWalletType} at address:
            </p>
            <div className="flex flex-row items-center gap-1 text-black">
              <p>{getWalletAddress()}</p>
              <button className="cursor-pointer">
                <TbCopy />
              </button>
            </div>

            <p className="text-[13px] text-[#848199] flex flex-row items-center flex-wrap gap-1">
              Until the end of fixing BTC course left: <CountdownTimer />
            </p>

            <form
              className="mt-5 flex flex-col"
              onSubmit={handleIvePaidClicked}
            >
              <InputForm
                label="Enter the id of the transaction"
                name="entered_hash"
              />
              <RegButton label="Ive paid" isLoading={isPurchasing} />
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[16px] p-[20px]">
      <div className="w-full flex flex-row items-center justify-between gap-[15px] flex-wrap">
        <h4 className="font-medium">Choose crypto currency</h4>

        <div className="flex flex-row items-center gap-5">
          {uniqueWalletTypes.map((walletType) => (
            <div
              className={`rounded-[12px] py-2.5 px-6 border-2 border-[#815aac] text-[#815aac]  cursor-pointer ${
                walletType == selectedWalletType ? "opacity-100" : "opacity-50"
              }`}
              onClick={setSelectedWalletType.bind(null, walletType)}
              key={walletType}
            >
              {walletType.toUpperCase()}
            </div>
          ))}
        </div>

        <div>
          <p className="text-[14px] text-[#aaa]">
            Two confirmations of the Bitcoin network is enough to accrue mining
            power. The BTC to USD exchange rate is fixed for 2 hours.
          </p>
        </div>

        <div className="flex flex-row items-center w-full justify-between mt-5 gap-4 flex-wrap">
          <RegButton
            label={`Pay ${parseFloat(getPriceToPay() || 0)}`}
            isDisabled={!hasAgreed}
            onClick={handlePayClicked}
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

export default CryptoWallet;
