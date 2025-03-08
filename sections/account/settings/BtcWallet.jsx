import React, { useEffect, useState } from "react";
import InputForm from "@/components/InputForm";
import RegButton from "@/components/RegButton";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import CheckboxInput from "@/components/CheckboxInput";
import PageLoader from "@/components/PageLoader";
import usePostRequest from "@/hooks/usePost";
import { handleGenericError } from "@/utils/errorHandler";

const BtcWallet = () => {
  const [wSettings, setWSettings] = useState(null);

  const {
    mutate: getWithdrawalSettings,
    isLoading: isGettingWithdrawalSettings,
  } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/withdrawal-settings/"),
    (response) => {
      console.log(response);
      setWSettings(response.data);
    },
    (error) => {
      toast.error("Failed to get withdrawal settings");
    }
  );

  const { mutate, isLoading } = usePostRequest(
    makeApiUrl("/api/v1/dashboard/withdrawal-settings/"),
    (response) => {
      toast.success("Withdrawal settings updated successfully");
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  useEffect(() => {
    getWithdrawalSettings();
  }, []);

  const handleFormSubmitted = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const reqBody = {
      automatic_withdrawal: formData.get("automatic_withdrawal") == "on",
      min_withdrawal_amount: formData.get("min_withdrawal_amount"),
      btc_address: formData.get("btc_address"),
    };
    mutate(reqBody);
  };

  if (isGettingWithdrawalSettings) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col mt-[30px] w-full">
      <div className="w-full flex flex-row gap-5 max-br780:flex-col">
        <div className="flex flex-col w-full">
          <h2 className="text-[20px] text-darkmuted font-semibold whitespace-nowrap text-start">
            BTC withdrawal wallet
          </h2>

          <form
            action=""
            className="flex flex-col w-full lg:w-[60%] gap-5 mt-5"
            onSubmit={handleFormSubmitted}
          >
            <InputForm
              label="BTC wallet address for withdrawal"
              type="text"
              name="btc_address"
              initial={wSettings?.btc_address}
            />

            <CheckboxInput
              label="Automatic withdrawal"
              name="automatic_withdrawal"
              defaultChecked={wSettings?.automatic_withdrawal || false}
            />

            <InputForm
              label="Minimum amount for automatic withdrawal"
              type="number"
              name="min_withdrawal_amount"
              initial={wSettings?.min_withdrawal_amount}
            />

            <RegButton label="Save" isLoading={isLoading} full={true} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BtcWallet;
