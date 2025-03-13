import RegButton from "@/components/RegButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CloudMiningSteps() {
  const steps = [
    {
      title: "Make a Contract Selection",
      description:
        "Many contracts are available from cloud mining services: these vary according to the coin, the quantity of hash power, and the duration of the contract.",
    },
    {
      title: "Maintain a record of your advancement",
      description:
        "You might be able to monitor your earnings, hash rate, and progress using a web interface or a mobile app.",
    },
    {
      title: "Access Your Earnings",
      description:
        "After amassing a sufficient amount of bitcoin, you have the option to transfer it to your digital wallet.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-gray-400">3 simple steps to start mining</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-amber-400">Cloud Mining</span>{" "}
              <span className="text-gray-800">Step by Step</span>
            </h2>
          </div>

          <p className="text-gray-600 max-w-xl">
            Find reputable btc cloud mining firms first. While Bitcoin miner and
            similar cryptocurrency platforms have shown to be trustworthy in the
            Bitcoin cloud mining industry, there are more factors to consider.
          </p>

          <RegButton label="Start now" />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 border border-gray-100 shadow-none hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 items-start">
                <img src="/eclipse.svg" className="w-[40px]" alt="" />

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-darkmuted">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
