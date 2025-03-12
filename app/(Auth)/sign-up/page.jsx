"use client";

import CheckboxInput from "@/components/CheckboxInput";
import Footer from "@/components/Footer";
import InputForm from "@/components/InputForm";
import RegButton from "@/components/RegButton";
import SectionWrapper from "@/components/SectionWrapper";
import TopNav from "@/components/TopNav";
import { makeApiUrl } from "@/constants/beroute";
import usePostRequest from "@/hooks/usePost";
import { handleGenericError } from "@/utils/errorHandler";
import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
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
  const { mutate: registerUser, isLoading: isRegistering } = usePostRequest(
    makeApiUrl("/api/v1/auth/register/"),
    (response) => {
      toast.success(
        "Your account has been successfully created. Please check your email for verification instructions."
      );
      // cha
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const handleFormSubmitted = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const termsAccepted = formData.get("terms_accepted") == "on";
    const newsLetter = formData.get("newsletter_subscription") == "on";
    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    formData.set("terms_accepted", termsAccepted);
    formData.set("newsletter_subscription", newsLetter);
    registerUser(formData);
  };
  return (
    <section>
      <TopNav />

      <SectionWrapper pad={false}>
        <div className="w-full sm:p-[20px] grid grid-cols-1 lg:grid-cols-2 rounded-[24px] bg-[#f8f8f8]">
          <div className="p-[45px]">
            <h1 className="text-[30px] mb-[8px] font-semibold text-darkmuted">
              Registration
            </h1>
            <p className="text-fivebgrey mb-[24px]">
              Enter your details below to create your account and get started.
            </p>

            <form action="" onSubmit={handleFormSubmitted}>
              <div className="w-full flex flex-col gap-[20px] justify-stretch items-center">
                <div className="w-full flex flex-row items-center justify-between gap-4 max-sm:flex-wrap">
                  <InputForm
                    label="First name"
                    placeholder="Your first name"
                    name="first_name"
                  />
                  <InputForm
                    label="Second name"
                    placeholder="Your second name"
                    name="last_name"
                  />
                </div>

                <div className="w-full">
                  <InputForm
                    label="Email"
                    placeholder="Your email"
                    name="email"
                  />
                </div>

                <div className="w-full flex flex-row items-center justify-between gap-4 max-sm:flex-wrap">
                  <InputForm
                    label="Password"
                    type="password"
                    placeholder="Your password"
                    name="password"
                  />
                  <InputForm
                    label="Confirm password"
                    placeholder="Your password"
                    type="password"
                    name="password_confirm"
                  />
                </div>

                <div className="flex flex-col gap-3 text-sm self-start">
                  {passwordRequirements.map((requirement) => {
                    return (
                      <div
                        className="flex flex-row items-center text-[#e8173e] gap-1"
                        key={requirement.requirement}
                      >
                        <FaRegCircleXmark className="shrink-0" />
                        <p>{requirement.requirement}</p>
                      </div>
                    );
                  })}
                </div>

                <InputForm
                  label="Referral code"
                  placeholder="Referral code"
                  required={false}
                  initial={searchParams.get("referral") || null}
                />
                <div className="w-full flex flex-col gap-[10px]">
                  <CheckboxInput
                    label="I accept and agree to the Terms & Conditions and Privacy Policy"
                    name="terms_accepted"
                  />

                  <CheckboxInput
                    label="I want to receive emails about exclusive offers from 1BitUp"
                    placeholder="Referral code"
                    name="newsletter_subscription"
                  />
                </div>

                <RegButton label="Signup" full={true} isLoading={isRegistering} />

                <p className="text-[14px] text-darkmuted text-center">
                  Have an account?{" "}
                  <a href="/sign-in" className="text-[#8e61bf]">
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="rounded-[24px] pt-[150px] bg-[url('/signupbg.webp')] bg-cover bg-no-repeat flex max-lg:hidden">
            <div className="pl-[80px] flex flex-col flex-[0_1_80%]">
              <h3 className="text-white text-[24px] font-semibold">
                Welcome to our community
              </h3>
              <p className="text-white text-[16px]">
                Sign in to find your dream ways of earning and gain full access
                to platform functions.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <Footer />
    </section>
  );
};

export default Page;
