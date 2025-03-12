import Image from "next/image";
import { Bitcoin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Step 1",
      description:
        "Purchase the Steady plan price range between 500 – 200 000 USD.",
    },
    {
      number: 2,
      title: "Step 2",
      description:
        "Enjoy the process by monitoring the Personal Dashboard for Steady Plan Progress.",
    },
    {
      number: 3,
      title: "Step 3",
      description:
        "Rewards are allocated each 30 days in USD, on the 1st of the Month following Steady Mining month. The rewards are distributed in BTC at BTC/USD exchange rate on the distribution date.",
    },
    {
      number: 4,
      title: "Step 4",
      description:
        "The Steady Plan principal cost shall be available for withdrawal in BTC, ONLY after 3-12 month Plan termination, within 3 days from Termination date.",
    },
    {
      number: 5,
      title: "Step 5",
      description:
        "Transfer your earnings according to your instructions. Transfer shall be processed instantly according to the BTC standard withdrawal process.",
    },
  ];

  return (
    <SectionWrapper>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-darkmuted mb-10">
              How it works?
            </h1>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-[#815aac]" />
                  <div className="space-y-2">
                    <h3 className="text-[18px] font-semibold text-[#815aac]">
                      {step.title}
                    </h3>
                    <p className="text-fivebgrey leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative rounded-[24px] overflow-hidden">
              <Image src={'/steadyphonemock.webp'} alt="Phone" width={200} height={200} className="w-full"/>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
