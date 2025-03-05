import InputForm from "@/components/InputForm";
import RegButton from "@/components/RegButton";
import { makeApiUrl } from "@/constants/beroute";
import usePatchRequest from "@/hooks/usePatch";
import { handleGenericError } from "@/utils/errorHandler";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setCredentials } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";

const SettingSection = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const tabList = [
    { id: 1, name: "General" },
    { id: 2, name: "Change details" },
    { id: 3, name: "BTC withdrawal wallet" },
    { id: 4, name: "2FA" },
    { id: 5, name: "KYC/AML" },
  ];

  const { mutate: editUser, isLoading: isEditingUser } = usePatchRequest(
    makeApiUrl("/api/v1/auth/profile/"),
    (response) => {
      toast.success("Profile updated successfully");
      dispatch(setCredentials(response.data));
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const handleFormSubmitted = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    editUser(formData);
  };
  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex flex-col bg-[#fafafa] rounded-[16px] p-[24px]">
        <div className="flex w-full items-center flex-row overflow-x-scroll no-scrollbar gap-[30px]">
          {tabList.map((tab) => {
            return (
              <button className="text-[20px] text-[#9a9a9a] hover:text-black cursor-pointer whitespace-nowrap">
                {tab.name}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col mt-[30px] w-full">
          <form
            className="flex flex-col w-full gap-5"
            onSubmit={handleFormSubmitted}
          >
            <div className="w-full flex flex-row items-center gap-5 max-[780px]:flex-col">
              <InputForm
                label="First name"
                placeholder="Your First name"
                initial={userInfo?.first_name}
                name="first_name"
                required={false}
              />
              <InputForm
                label="Second name"
                placeholder="Your second name"
                initial={userInfo?.last_name}
                name="last_name"
                required={false}
              />
            </div>
            <div className="w-full flex flex-row items-center gap-5 max-[780px]:flex-col">
              <InputForm
                label="Email"
                placeholder="Your email"
                initial={userInfo?.email}
                readOnly={true}
                name="email"
                required={false}
              />
              <InputForm
                label="Cell phone"
                placeholder="Your phone number"
                initial={userInfo?.phone_number}
                name="phone_number"
                required={false}
              />
            </div>
            <div className="w-full flex flex-row items-center gap-5 max-[780px]:flex-col">
              <InputForm
                label="Country"
                placeholder="Your country"
                initial={userInfo?.country}
                name="country"
                required={false}
              />
              <InputForm
                label="City"
                placeholder="Your city"
                initial={userInfo?.city}
                name="city"
                required={false}
              />
            </div>
            <div className="w-full flex flex-row items-center gap-5 max-[780px]:flex-col">
              <InputForm
                label="Present address"
                placeholder="Your address"
                initial={userInfo?.address}
                name="address"
                required={false}
              />
              <InputForm
                label="Postal code"
                placeholder="Your postal code"
                initial={userInfo?.postal_code}
                name="postal_code"
                required={false}
              />
            </div>

            <div className="w-full flex flex-row justify-end">
              <RegButton label="Save" isLoading={isEditingUser} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SettingSection;
