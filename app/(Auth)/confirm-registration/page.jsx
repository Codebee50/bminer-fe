"use client";

import React from "react";
import TopNav from "@/components/TopNav";
import SectionWrapper from "@/components/SectionWrapper";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import RegButton from "@/components/RegButton";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("email")) {
      toast.error("Fatal: Invalid or missing email address");
      router.push("/sign-in");
    }
  }, []);

  const handleFormSubmitted = (e) => {
    const formData = new FormData(e.target);
  };
  return (
    <section>
      <TopNav />
      <SectionWrapper pad={false}>
        <div className="flex flex-col w-full pt-[40px] gap-[20px]">
          <h1 className="text-[30px] mb-[8px] font-semibold text-darkmuted">
            We just sent you an email with the 6-digit code
          </h1>

          <form action="" className="flex flex-col gap-[20px]">
            <p className="my-[10px]">
              Enter the 6-digit code we emailed to onuhudoudo@gmail.com
            </p>

            <div className="w-full flex flex-row">
              <InputOTP
                maxLength={6}
                className={"flex flex-row justify-between w-full"}
                name="token"
              >
                <InputOTPGroup
                  className={"flex flex-row justify-between w-full gap-5"}
                >
                  {[0, 1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <InputOTPSlot
                        className={"p-8 border shadow-none text-xl  "}
                        index={index}
                        key={`input-otp-${index}`}
                      />
                    );
                  })}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <RegButton label="Confirm" />
          </form>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Page;
