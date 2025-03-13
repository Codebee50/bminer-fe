"use client";
import RegButton from "@/components/RegButton";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import { useRouter } from "next/navigation";

const WhyChooseUs = () => {
  const router = useRouter();
  const features = [
    {
      title: "Higher Profit Potential",
      description:
        "Benefit from competitive rates and transparent fees, ensuring no hidden costs.",
    },
    {
      title: "User-Friendly Experience",
      description:
        "No hardware is required, our automatic cloud Bitcoin mining service ensures hassle-free earnings with minimal effort.",
    },
    {
      title: "Real-Time Performance Monitoring",
      description:
        "Monitor your mining performance and earnings with detailed analytics and reporting tools.",
    },
    {
      title: "Unmatched Security",
      description:
        "Our state-of-the-art data centres and advanced security protocols protect your investments.",
    },
    {
      title: "24/7 Dedicated Support",
      description:
        "Enjoy peace of mind with round-the-clock customer service and comprehensive support resources.",
    },
    {
      title: "Flexible and Affordable Plans",
      description:
        "Select from a range of contract options, including pay-as-you-go, for ultimate flexibility and affordability.",
    },
  ];
  return (
    <SectionWrapper pad={false}>
      <div className="flex flex-col gap-[32px] py-[64px]">
        <div className="w-full flex flex-row">
          <div className="flex flex-col flex-[2_1]">
            <h3 className="font-medium mb-[15px] text-[30px] md:text-[40px] text-darkmuted ">
              Why choose us?
            </h3>
            <p className="text-[#5b5b5b] text-[15px] sm:text-[20px] mb-[40px]">
              At Bitcoin miner, we focus on delivering real, measurable results.
              Our commitment is to practical outcomes, not just theoretical
              promises, ensuring you see tangible success from your investment.
            </p>

            <RegButton
              label={"Get started now"}
              onClick={router.push.bind(null, "/sign-up")}
            />
          </div>

          <div>
            <img
              src="/cpu.png"
              className="w-[90%] max-w-[319px] h-[239px] object-contain object-center max-br770:hidden"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 w-full gap-[42px]">
          {features.map((feature) => {
            return (
              <div className="flex flex-col gap-[10px]" key={feature.title}>
                <img src="/eclipse.svg" className="w-[40px]" alt="" />
                <p className="text-darkmuted font-medium">{feature.title}</p>
                <p className="text-[#5b5b5b] text-[16px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
