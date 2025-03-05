import InputForm from "@/components/InputForm";
import RegButton from "@/components/RegButton";
import { makeApiUrl } from "@/constants/beroute";
import usePostRequest from "@/hooks/usePost";
import { handleGenericError } from "@/utils/errorHandler";
import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

const ChangeDetails = () => {
  const passwordRequirements = [
    {
      requirement: "Password must be at least 8 characters long",
      met: false,
    },
    {
      requirement: "Password must contain both uppercase and lowercase letters",
      met: false,
    },
    {
      requirement: "Password must include at least one number and one symbol",
      met: false,
    },
  ];

  const { mutate: changePassword, isLoading: isChangingPassword } =
    usePostRequest(
      makeApiUrl("/api/v1/auth/change-password/"),
      (response) => {
        toast.success("Password changed successfully");
      },
      (error) => {
        toast.error(handleGenericError(error));
      }
    );

  const handleChangePasswordSubmitted = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    changePassword(formData);
  };
  return (
    <div className="flex flex-col mt-[30px] w-full">
      <div className="w-full flex flex-row gap-5 max-[780px]:flex-col">
        <div className="flex flex-col w-full">
          <h2 className="text-[20px] text-darkmuted font-semibold whitespace-nowrap text-start">
            Change password
          </h2>

          <form
            action=""
            className="flex flex-col w-full gap-5 mt-5"
            onSubmit={handleChangePasswordSubmitted}
          >
            <InputForm
              label="Current password"
              type="password"
              name="current_password"
            />
            <InputForm
              label="New password"
              type="password"
              name="new_password"
            />

            <div className="flex flex-col gap-3 text-sm self-start">
              {passwordRequirements.map((requirement) => {
                return (
                  <div
                    className="flex flex-row items-center text-[#e8173e] gap-1"
                    key={requirement.requirement}
                  >
                    <FaRegCircleXmark />
                    <p>{requirement.requirement}</p>
                  </div>
                );
              })}
            </div>

            <InputForm
              label="Repeat new password"
              type="password"
              name="confirm_password"
            />
            <RegButton label="Save" isLoading={isChangingPassword} full={true} />
          </form>
        </div>
        <div className="w-full flex flex-col">
          <h2 className="text-[20px] text-darkmuted font-semibold whitespace-nowrap text-start">
            Change email
          </h2>

          <form
            action=""
            className="flex flex-col w-full gap-5 mt-5"
            onSubmit={handleChangePasswordSubmitted}
          >
            <InputForm
              label="Current email"
              type="email"
              name="current_email"
            />
            <InputForm label="Password" type="password" name="password" />

            <div className="w-full p-5 border border-purple200 rounded-xl flex flex-row gap-3">
              <input type="checkbox" name="" id="" />
              <p className="text-[#9a9a9a]">
                I want to receive emails about exclusive offers from
                Bitcoinminner
              </p>
            </div>
            <RegButton label="Save" isLoading={false} full={true} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeDetails;
