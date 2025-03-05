import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setCredentials } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import InputForm from "@/components/InputForm";
import RegButton from "@/components/RegButton";
import { makeApiUrl } from "@/constants/beroute";
import usePatchRequest from "@/hooks/usePatch";
import { handleGenericError } from "@/utils/errorHandler";

const EditUserDetails = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
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
  );
};

export default EditUserDetails;
