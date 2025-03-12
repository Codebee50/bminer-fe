import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const CanEarn = () => {
  return (
    <SectionWrapper pad={false}>
      <div className="w-full flex flex-col md:flex-row justify-between gap-[30px] items-center">
        <div className="flex-[0_1_500px] flex flex-col gap-[20px]">
          <h3 className="font-semibold mb-[15px] text-[48px] md:text-[40px] text-darkmuted ">
            <span className="text-yellow100">How much</span> can i earn
          </h3>

          <p className="text-[20px]">
            Our affiliate program consists of 3 levels which means you'll be
            able to get higher affiliate commission for referring more sales.
            Also, you shall get 2% from any subsequent sale made by your
            referral link.
          </p>
        </div>

        <div className="md:flex-[0_1_520px]">
          <div>
            <img src="/charts.avif" alt="" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CanEarn;
