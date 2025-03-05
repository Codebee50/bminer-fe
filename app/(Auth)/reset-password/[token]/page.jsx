"use client";

import InputForm from "@/components/InputForm";
import SectionWrapper from "@/components/SectionWrapper";
import TopNav from "@/components/TopNav";
import React, { useEffect } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

import RegButton from "@/components/RegButton";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import usePostRequest from "@/hooks/usePost";
import { handleGenericError } from "@/utils/errorHandler";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { makeApiUrl } from "@/constants/beroute";

const Page = () => {
  const router = useRouter();

  const { token } = useParams();

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

  const { mutate: changePassword, isLoading } = usePostRequest(
    makeApiUrl("/api/v1/auth/reset-password/confirm/"),
    (response) => {
      toast.success("Password reset successfully");
      router.push("/sign-in");
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const handleFormSubmitted = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (formData.get("password") !== formData.get("confirm_password")) {
      toast.error("Passwords do not match");
      return;
    }

    formData.set("token", token);

    changePassword(formData);
  };


  return (
    <section>
      <TopNav />
      <SectionWrapper pad={false} centered={true}>
        <div className="flex flex-col items-center w-full max-w-[500px] justify-center pt-[40px] gap-[20px]">
          <h1 className="text-[30px] mb-[8px] font-semibold text-darkmuted">
            Password recovery
          </h1>

          <form
            action=""
            className="flex flex-col items-center gap-[20px]"
            onSubmit={handleFormSubmitted}
          >
            <InputForm
              label="New password"
              type="password"
              placeholder="Your new password"
              name="password"
            />
            <InputForm
              label="Confirm password"
              type="password"
              placeholder="Your new confirmed password"
              name="confirm_password"
            />

            <div className="flex flex-col gap-3 text-sm self-start">
              {/* TODO: add validation for this */}
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



            <RegButton label="Save" full={true} isLoading={isLoading} />
          </form>
        </div>
      </SectionWrapper>

      <Footer />
    </section>
  );
};

export default Page;
