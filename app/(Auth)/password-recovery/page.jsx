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
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/features/auth/authSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate: resetPassword, isLoading: isResettingPassword } =
    usePostRequest(
      makeApiUrl("/api/v1/auth/reset-password/"),
      (response) => {
        toast.success("Password reset instructions has been sent to your email")
      },
      (error) => {
        toast.error(handleGenericError(error));
      }
    );

  const handleFormSubmitted = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    resetPassword(formData);
  };
  return (
    <section>
      <TopNav />

      <SectionWrapper pad={false}>
        <div className="w-full p-[20px] grid grid-cols-1 lg:grid-cols-2 rounded-[24px] bg-[#f8f8f8] mt-[50px]">
          <div className="p-[45px]">
            <h1 className="text-[30px] mb-[8px] font-semibold text-darkmuted">
              Password recovery
            </h1>

            <form action="" onSubmit={handleFormSubmitted}>
              <div className="w-full flex flex-col gap-[20px] justify-stretch items-center">
                <div className="w-full">
                  <InputForm
                    label="Email"
                    placeholder="Your email"
                    name="email"
                  />
                </div>

                <RegButton
                  label="Signup"
                  full={true}
                  isLoading={isResettingPassword}
                />
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
