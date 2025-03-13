"use client";
import React, { useEffect } from "react";
import { User, DollarSign, Award } from "lucide-react";
import ReferralStat from "@/components/ReferralStat";
import { PiCopySimpleDuotone } from "react-icons/pi";
import { toast } from "react-toastify";
import { Link, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import CircleSpinner from "@/components/CircleSpinner";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaAward } from "react-icons/fa6";

const Referrals = () => {
  const [referral, setReferral] = useState(null);
  const steps = [
    { step: 1, text: "Copy and share your referral link with your friends" },
    { step: 2, text: "Friends visit Bitcoin miner and register" },
    { step: 3, text: "You receive rewards on all their purchases" },
  ];

  const getBaseUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.protocol}//${window.location.host}`;
    } else {
      return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";
    }
  };

  const getReferralLink = () => {
    return `${getBaseUrl()}/sign-up/?referral=${referral?.referral_code}`;
  };

  const referralLink = getReferralLink();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleCopyClicked = async () => {
    const copyValue = getReferralLink();
    try {
      await navigator.clipboard.writeText(copyValue);
      toast.success("Referral link copied successfully!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  const shareButtons = [
    {
      name: "Copy link",
      icon: <Link className="w-5 h-5" />,
      onClick: handleCopyClicked,
      ariaLabel: "Copy referral link to clipboard",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      onClick: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            referralLink
          )}`,
          "_blank"
        ),
      ariaLabel: "Share on Facebook",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      onClick: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            referralLink
          )}`,
          "_blank"
        ),
      ariaLabel: "Share on Twitter",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      onClick: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            referralLink
          )}`,
          "_blank"
        ),
      ariaLabel: "Share on LinkedIn",
    },
    {
      name: "Telegram",
      icon: <Send className="w-5 h-5" />,
      onClick: () =>
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(referralLink)}`,
          "_blank"
        ),
      ariaLabel: "Share on Telegram",
    },
  ];

  const { mutate, isLoading } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/my-referrals/"),
    (response) => {
      setReferral(response.data);
    },
    (error) => {
      toast.error("Failed to fetch referral information");
    }
  );

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full min-h-[30vh] flex items-center justify-center">
        <CircleSpinner />
      </div>
    );
  }
  return (
    <section className="w-full flex flex-col gap-[30px]">
      <h2 className="text-darkmuted text-[26px] font-semibold">
        Referral program
      </h2>

      <div className="flex flex-row items-center gap-[24px] justify-between max-md:flex-wrap w-full">
        <ReferralStat
          label="Users that have registered using your referral code"
          number={referral?.referrals_count}
        />
        <ReferralStat
          label="Users that have bought a contract using your referral code"
          Icon={HiCurrencyDollar}
          number={referral?.active_referrals_count}
        />
        <ReferralStat
          label="Your rewards from the referral program"
          Icon={FaAward}
          number={referral?.total_rewards}
        />
      </div>

      <div className="grid grid-cols-1 br770:grid-cols-2 gap-[20px]">
        <div className="flex flex-col justify-between bg-[#f8f8f8] rounded-[16px] pt-[25px] px-[30px] pb-[35px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-darkmuted font-semibold text-[20px]">
              How it works:
            </h2>

            <div className="flex flex-col gap-[15px]">
              {steps.map(({ step, text }) => (
                <div
                  key={step}
                  className="flex items-center gap-[10px] pb-[20px] border-b border-b-[#ececec]"
                >
                  <span className="font-semibold text-[14px]">{step}.</span>
                  <p className="text-[#5b5b5b] text-[14px]">{text}</p>
                </div>
              ))}

              <div
                className="flex flex-row items-center gap-y-[8px] gap-x-[13px] mt-10"
                onClick={handleCopyClicked}
              >
                <p className="text-[14px]">
                  Your code:{" "}
                  <span className="font-bold">{referral?.referral_code} </span>
                </p>

                <div className="text-white bg-black px-4 rounded-xl cursor-pointer py-2">
                  <PiCopySimpleDuotone />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-[#f8f8f8] rounded-[16px] pt-[25px] px-[30px] pb-[35px]">
          <h2 className="text-darkmuted font-semibold text-[20px]">
            Share your referral link
          </h2>

          <div className="flex flex-wrap gap-2">
            {shareButtons.map((button) => (
              <button
                key={button.name}
                onClick={button.onClick}
                className="flex items-center justify-center w-16 h-16 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-200"
                aria-label={button.ariaLabel}
              >
                {button.icon}
                <span className="sr-only">{button.name}</span>
              </button>
            ))}
          </div>

          <div className="bg-[url('/refimg.png')]  pt-[8px] px-[15px] pb-[15px] flex flex-col justify-between rounded-[12px] min-h-[150px] max-br770:mt-5">
            <img src="/logo-white-text.svg" className="w-[80px]" alt="" />

            <p className="text-[22px] font-semibold text-white">
              Start mining with your friends TODAY!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
