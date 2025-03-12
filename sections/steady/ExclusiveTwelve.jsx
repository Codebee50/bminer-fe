import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const ExclusiveTwelve = () => {
  const exclusiveList = [
    {
      id: 1,
      title: "Safe Return",
      description:
        "Enjoy a return of up to 25% on your return over 3-12 months, irrespective of market fluctuations of Bitcoin or changes in mining difficulty or other conditions.",
    },
    {
      id: 2,
      title: "Enhanced Management",
      description:
        "The Fixed Income Return is achieved through the implementation of several key elements: efficient management of hashrate capacities and multi-algorithm mining, enhanced by AI-driven features.",
    },
    {
      id: 3,
      title: "Transparent Calculation",
      description:
        "Your return is calculated based on the value of selected contract price. The rewards are estimated in USD and payable in Bitcoin. Rest assured, our transparent calculations ensure accuracy and reliability.",
    },
    {
      id: 4,
      title: "Flexible Mining Options",
      description:
        "Choose from a range of mining plans to suit your budget and desired goals. We offer scalable options, allowing you to adjust your plan amount.",
    },
    {
      id: 5,
      title: "Maintenance Fees",
      description:
        "We charge a nominal maintenance fee, which is already factored into the calculated returns. There are no hidden costs or surprises.",
    },
  ];
  return (
    <SectionWrapper pad={false}>
      <div className="w-full flex flex-col">
        <h1 className="text-4xl font-bold text-darkmuted mb-10">
          Exclusive 12 month plan
        </h1>
        <section className="w-full flex flex-col ">
          {exclusiveList.map((exclusive, index) => (
            <div
              className="w-full max-w-6xl mx-auto border-b border-b-[#ececec] py-8 my-8"
              key={exclusive.title}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-row gap-3 items-start flex-wrap">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#8b5ebc] text-white font-medium text-[21px] flex items-center justify-center">
                    <p>{index + 1}</p>
                  </div>
                  <h2 className="text-2xl font-semibold text-darkmuted">
                    {exclusive.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">{exclusive.description}</p>
                  {/* <p className="font-medium text-gray-700">{formula}</p> */}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </SectionWrapper>
  );
};

export default ExclusiveTwelve;
