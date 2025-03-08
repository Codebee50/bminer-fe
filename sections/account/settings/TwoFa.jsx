import CircleSpinner from "@/components/CircleSpinner";
import InputForm from "@/components/InputForm";
import NumberedRowStat from "@/components/NumberedRowStat";
import RegButton from "@/components/RegButton";
import { makeApiUrl } from "@/constants/beroute";
import useFetchRequest from "@/hooks/useFetch";
import usePostRequest from "@/hooks/usePost";
import { handleGenericError } from "@/utils/errorHandler";
import React, { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import PageLoader from "@/components/PageLoader";

const TwoFa = () => {
  const [twoFaSetup, setTwoFaSetup] = useState(null);

  const { mutate: get2faSetup, isLoading: gettingSetup } = useFetchRequest(
    makeApiUrl("/api/v1/auth/2fa/setup/"),
    (response) => {
      setTwoFaSetup(response.data);
    },
    (error) => {
      toast.error("Failed to get your 2fa configurations");
    }
  );

  const { mutate, isLoading } = usePostRequest(
    makeApiUrl("/api/v1/auth/2fa/setup/"),
    (response) => {
      toast.success("2fa setup successfully");
      get2faSetup();
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const { mutate: disable2fa, isLoading: isDisabling2fa } = usePostRequest(
    makeApiUrl("/api/v1/auth/2fa/disable/"),
    (response) => {
      toast.success("2fa disabled successfully");
      get2faSetup();
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  useEffect(() => {
    get2faSetup();
  }, []);

  const handleFormSubmitted = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const reqBody = {
      otp_code: formData.get("google_authenticator_code"),
    };
    mutate(reqBody);
  };

  const handleDisable2fa = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    disable2fa(formData);
  };

  if (gettingSetup) {
    return <PageLoader />;
  }

  if (twoFaSetup?.is_verified) {
    return (
      <div className="flex flex-col mt-[30px] w-full">
        <div className="w-full flex flex-row gap-5 max-[780px]:flex-col">
          <form className="flex flex-col w-full" onSubmit={handleDisable2fa}>
            <h2 className="text-[20px] text-darkmuted font-semibold whitespace-nowrap text-start">
              Two factor authentication
            </h2>

            <p className="text-darkmuted mt-5">
              Your two-factor authentication (2FA) has already been set up.
            </p>
            <div className="mt-5 w-full">
              <InputForm
                label="Your password"
                placeholder="Enter your account password"
                name="password"
              />
              {isDisabling2fa ? (
                <CircleSpinner />
              ) : (
                <button className="bg-red-500 text-white rounded-md w-max px-5 py-3 mt-4 cursor-pointer">
                  Disable 2fa
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
  return (
    <form
      className="flex flex-col mt-[30px] w-full"
      onSubmit={handleFormSubmitted}
    >
      <div className="w-full flex flex-row gap-5 max-[780px]:flex-col">
        <div className="flex flex-col w-full">
          <h2 className="text-[20px] text-darkmuted font-semibold whitespace-nowrap text-start">
            Two factor authentication
          </h2>

          <div className="mt-5"></div>
          <NumberedRowStat
            number={1}
            text={
              "To use 2FA, scan the QR code on the right in the Google Authenticator app on your phone: \n \n Google Authenticator is available in Android Play Market and iOS App Store"
            }
          />
          <div action="" className="flex flex-col w-full gap-5 mt-5">
            <div className="flex flex-row w-full justify-between gap-[20px] mt-[10px]">
              <img
                src={twoFaSetup?.qr_code_url}
                alt="Qr code url"
                className="max-w-[144px]"
              />
              <InputForm
                label="Or Enter Backup Key:"
                name="confirm_password"
                initial={twoFaSetup?.secret_key}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex flex-col w-full gap-5 mt-5">
            <div className="mt-5"></div>
            <NumberedRowStat
              number={2}
              text={
                "Enter your account password and the six-digit code provided by the Google Authenticator app below, then click Enable 2FA"
              }
            />
            {/* <InputForm label="Password" type="password" name="password" /> */}
            <InputForm
              label="Google authenticator code"
              type="password"
              name="google_authenticator_code"
            />
          </div>
        </div>
      </div>

      <div className="w-full p-5 border border-purple200 rounded-xl flex flex-col gap-3 mt-[20px]">
        {/* <input type="checkbox" name="" id="" /> */}
        <p className="text-[#815aac] font-semibold">Important!</p>
        <p className="text-[#9a9a9a]">
          Before enabling 2FA, write down the backup key and keep it in a safe
          place. If your phone is lost, stolen or damaged, you will need this
          key to get back into your account.
        </p>
      </div>

      <div className="mt-[20px] flex flex-row items-center justify-end">
        <RegButton label="Save" isLoading={isLoading} />
      </div>
    </form>
  );
};

export default TwoFa;
