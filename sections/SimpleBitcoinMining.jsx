import RegButton from "@/components/RegButton";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const SimpleBitcoinMining = () => {
  return (
    <section className="bg-[#ffc55a] w-full mt-[100px]">
      <SectionWrapper pad={false}>
        <div className="relative w-full pt-[60px]">
          <div className="w-full">
            <div className="flex flex-col xl:w-[50%] z-5">
              <h1 className="text-[48px] mb-[15px] text-darkmuted font-medium">
                Simple Bitcoin Mining
              </h1>
              <p className="text-[#5b5b5b] text-[20px] mb-[35px]">
                This process not only creates new bitcoins but also helps to
                secure the network and confirm transactions
              </p>
              <RegButton label="Get Started Now" />

              <div className="mb-[30px]"></div>
            </div>
          </div>

          <div className="xl:w-[50%] xl:absolute right-0 bottom-0">
            <img src="/simplebit.webp" className="overflow-clip w-full align-middle" alt="" />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default SimpleBitcoinMining;
