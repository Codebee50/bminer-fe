import React from "react";
import LandingConverts from "../components/LandingConverts";

const GetStarted = () => {
  const steps = [
    {
      label: "Sign Up",
      text: "Cloud mining contracts are available through our app or via the cloudmining website. After registration, you will be able to choose the best option.",
    },
    {
      label: "Choose Your Plan",
      text: "We have designed our platform to guide you through the process of virtual mining, helping you understand how it works.",
    },
    {
      label: "Receive your Rewards",
      text: "Create your contract using the calculator and choose your preferred payment method – by card or cryptocurrency.",
    },
  ];

  return (
    <section className="w-full min-h-screen br1270:h-screen pt-[160px] pb-[64px]  justify-center">
      <div className="w-full max-w-[1300px] px-[5px] sm:px-[50px] mx-auto">
        <div className="flex max-br1270:flex-col bg-[#f8f8f8] rounded-3xl p-[20px] sm:p-[60px]">
          <div className="flex flex-col justify-end flex-[1_1]">
            <div className="relative h-[300px] block">
              <img src="/phones.png" className="absolute top-[-30%]" alt="" />

              <div className="absolute top-0 left-0 bg-faintpurple h-[200px] w-[200px] z-[2] rounded-full"></div>

              <p className="max-sm:hidden absolute p-[8px] text-[14px] rounded-[8px] bg-faintpurple border-b border-b-faintpurple z-[4] backdrop-blur-[2px] right-[30%] top-[20%]">
                • Simple registration in 3 clicks
              </p>
              <p className="max-sm:hidden absolute p-[8px] text-[14px] rounded-[8px] bg-faintpurple border-b border-b-faintpurple z-[4] backdrop-blur-[2px] right-[20%] top-[35%]">
                • Updated information on accounts
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-[#bbb] text-[18px] mb-[5px]">
                3 simple ways to start mining
              </p>
              <h2 className="text-[30px] sm:text-[48px] font-medium mb-[15px] text-[#373737]">
                How do i get started
              </h2>
              <p className="text-[#5b5b5b] text-[10px] sm:text-[20px] mb-[35px] leading-[140%]">
                Access to the world of cryptocurrencies is simpler than ever
                with our 1BitUp Cloud Mining Platform.
              </p>

              <a href="Get started now" className="text-[#790bf9]">
                <button className="text-white bg-[#373737] text-[14px] rounded-[12px] font-medium py-[12px] w-[190px]">
                  Get Started Now
                </button>
              </a>
            </div>
          </div>

          <div className="flex-[1_1] flex flex-col justify-between max-br1270:py-6">
            {steps.map((step) => (
              <LandingConverts
                key={step.text}
                text={step.text}
                label={step.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
