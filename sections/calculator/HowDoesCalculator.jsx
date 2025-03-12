import MiningMetric from "@/components/MiningMetric";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const HowDoesCalculator = () => {
  const hashrateInfo = [
    "Hashrate fee",
    "Hashrate quantity",
    "Contract duration",
    "Service fee - we do not charge service fee, it is included in the price already.",
  ];

  const miningMetrics = [
    {
      title: "Static Output",
      description:
        "This is the amount of a particular cryptocurrency that can be mined within a specified period (day).",
      formula:
        "Static Output = (Currency Mined Over Duration x Reference Currency Price) / Duration",
    },
    {
      title: "Static Output Ratio",
      description:
        "This ratio may be expressed as a percentage. It compares the total costs incurred vs. the output.",
      formula:
        "Static Output Ratio = (Duration Static Output) / Duration Contract Fee",
    },
    {
      title: "Duration Static Output (day, month, year)",
      description: "The duration static output is calculated as:",
      formula:
        "Duration Static Output = Currency Mined in Duration x Reference Currency Price",
    },
    {
      title: "Static Output of Bitcoin",
      description: "The static output of BTC is determined by:",
      formula:
        "Static Output of BTC = (Period Contract Fee) / Duration of Static Output of BTC",
    },
    {
      title: "Static Cost Recovery Time",
      description:
        "The static cost recovery time calculates the time before a user can make a profit with a cloud mining service:",
      formula:
        "Static Cost Recovery Time = Duration Contract Fee / (Duration Static Output)",
    },
  ];

  console.log(miningMetrics);

  return (
    <SectionWrapper pad={false}>
      <h1 className="text-darkmuted text-[48px] font-semibold">
        How does the calculator estimate profits?
      </h1>

      <section className="w-full p-[60px] bg-[#f8f8f8] flex flex-col gap-[10px] rounded-[24px] mt-[40px]">
        <p className="text-[20px] text-[#5b5b5b]">
          When estimating potential profits of mining operations, calculators
          take into account the cost of cryptocurrency, amount of energy used,
          the price of energy, hashrate conversions, or mining difficulty.
        </p>
        <p className="text-[20px] text-[#5b5b5b]">
          In calculating cloud mining profits a third-party service is
          responsible for the energy expended and the handling and maintenance
          of hardware.
        </p>
        <p className="text-[20px] text-[#5b5b5b]">
          Therefore, a cloud mining RoI calculator may require:
        </p>

        {hashrateInfo.map((info) => (
          <div className="flex flex-row items-center gap-3">
            <div className="h-[20px] w-[20px] rounded-full bg-yellow100"></div>
            <p className="text-[20px] text-[#5b5b5b]">{info}</p>
          </div>
        ))}

        <p className="text-[20px] text-[#5b5b5b]">
          The hashrate calculator then analyses various parameters — network
          complexity, the current price of the cryptocurrency, and exchange rate
          — and offers the user accurate and up-to-date data about potential
          profit.
        </p>

        <p className="text-[20px] text-[#5b5b5b]">
          Some crucial terms and formulas that calculate the potential profit
          are:
        </p>
      </section>

      <section className="w-full flex flex-col mt-[100px]">
        {miningMetrics.map((metric) => (
          <MiningMetric {...metric} key={metric.formula}/>
        ))}
      </section>
    </SectionWrapper>
  );
};

export default HowDoesCalculator;
