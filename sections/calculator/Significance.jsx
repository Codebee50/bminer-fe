import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const Significance = () => {
  const significanceList = [
    {
      title: "Service Fee",
      description: "Service fee is already included in our plans.",
    },
    {
      title: "Contract Duration",
      description: "Starting 1 month.",
    },
    {
      title: "Hashrate",
      description:
        "This is the total power the third-party hardware uses to run and solve different hashing algorithms. The figure is usually expressed in TH/s where 1 TH/s = 1,000 GH/s. The greater the hashing power offered by the service, the higher the profit potential.",
    },
    {
      title: "Hashrate Quantity",
      description:
        "This is the computing power a user intends to rent out from our company. A higher hashrate indicates a greater chance of profit but also needs a bigger investment.",
    },
    {
      title: "Mining Difficulty",
      description:
        "The mining difficulty is a measure of how difficult it is to solve the complex mining cryptographic puzzles. Mining difficulty is in a constant state of flux. In most calculators, however, the mining difficulty is fixed by the service. It may be periodically updated but doesn’t account for future variations.",
    },
    {
      title: "Currency Price",
      description:
        "This refers to the current value of the cryptocurrency being mined. These values are set automatically but can change drastically over time.",
    },
  ];

  return (
    <SectionWrapper pad={false}>
      <div className="w-full flex flex-col gap-[25px] mt-[100px]">
        <h1 className="text-darkmuted text-[48px] font-semibold max-w-[900px]">
          Understanding the Significance of Each Calculator Field
        </h1>

        <p className="text-[#5b5b5b] text-[20px]">
          Depending on the depth of analysis offered or the company that
          provides the service, different Bitcoin cloud mining calculators may
          display a number of different fields.
        </p>
        <p className="text-[#5b5b5b] text-[20px]">
          It’s crucial to understand the significance of each field to determine
          potential ROI.
        </p>

        {significanceList.map((significance) => {
          return (
            <div
              className="flex flex-row items-start gap-[20px]"
              key={significance.title}
            >
              <img src="/eclipse.svg" className="w-[30px]" alt="" />
              <div className="flex flex-col gap-2">
                <p className="text-darkmuted font-medium text-xl">
                  {significance.title}
                </p>
                <p className="text-[#5b5b5b] text-[20px]">
                  {significance.description}
                </p>
              </div>
            </div>
          );
        })}

        <div className="p-[40px] rounded-[24px] border border-[#b5b5b5] flex flex-col mt-[100px] gap-5">
          <h2 className="text-[48px] text-darkmuted font-semibold">
            Disclaimer
          </h2>

          <p className="text-[#5b5b5b] text-[20px]">
            A Bitcoin hashrate calculator may make several assumptions related
            to future cryptocurrency prices, mining difficulty, or calculation
            of network hash rate. These figures are variables and far from
            stable. In most cases, calculators do not consider possible future
            changes to the data, which significantly alter a potential profit
            forecast.
          </p>

          <p className="text-[#5b5b5b] text-[20px]">
            It’s crucial to note that all these calculations are only
            approximations of total costs and revenues.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Significance;
