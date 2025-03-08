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
import React, { useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/features/auth/authSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [twoFaRequired, setTwoFaRequired] = useState(false);

  const getRoute = () => {
    const nextPage = searchParams.get("next");
    return nextPage ? nextPage : "/account/home";
  };

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

  const getUserDetails = async (accessToken, refreshToken) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const { data } = await axios.get(
      makeApiUrl("/api/v1/auth/profile/"),
      config
    );
    if (data) {
      Cookies.set("refreshToken", refreshToken);
      Cookies.set("userToken", accessToken);
      dispatch(setCredentials(data));

      toast.success("Login successful");
      router.push(getRoute());
    }
  };

  const { mutate: loginUser, isLoading: isLoggingIn } = usePostRequest(
    makeApiUrl("/api/v1/auth/login/"),
    (response) => {
      const { access, refresh } = response.data;
      getUserDetails(access, refresh);
    },
    (error) => {
      console.log(error);
      if (error.response.data.requires_2fa) {
        setTwoFaRequired(true);
      } else {
        toast.error(handleGenericError(error));
      }
    }
  );

  const handleFormSubmitted = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    loginUser(formData);
  };
  return (
    <section>
      <TopNav />

      <SectionWrapper pad={false}>
        <div className="w-full sm:p-[20px] grid grid-cols-1 lg:grid-cols-2 rounded-[24px] bg-[#f8f8f8]">
          <div className="p-[45px]">
            <h1 className="text-[30px] mb-[8px] font-semibold text-darkmuted">
              Authentication
            </h1>
            <p className="text-fivebgrey mb-[24px]">
              Enter your details to access your account
            </p>

            <form action="" onSubmit={handleFormSubmitted}>
              <div className="w-full flex flex-col gap-[20px] justify-stretch items-center">
                <div className="w-full">
                  <InputForm
                    label="Email"
                    placeholder="Your email"
                    name="email"
                    readOnly={twoFaRequired}
                  />
                </div>

                <div className="w-full flex flex-row items-center justify-between gap-4 max-sm:flex-wrap">
                  <InputForm
                    label="Password"
                    type="password"
                    placeholder="Your password"
                    name="password"
                    readOnly={twoFaRequired}
                  />
                </div>

                {twoFaRequired && (
                  <InputForm
                    label="Two factor authentication"
                    type="text"
                    placeholder="Enter your 2fa verification otp"
                    name="otp_code"
                  />
                )}

                <div className="w-full flex flex-row items-center">
                  <CheckboxInput label="Remember me" name="remember_me" />

                  <a
                    href="/password-recovery"
                    className="font-medium text-purple300 whitespace-nowrap"
                  >
                    Forgot password?
                  </a>
                </div>

                <RegButton label="Signup" full={true} isLoading={isLoggingIn} />

                <p className="text-[14px] text-darkmuted text-center">
                  Dont have an account?{" "}
                  <a href="/sign-up" className="text-[#8e61bf]">
                    Sign up for free
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
