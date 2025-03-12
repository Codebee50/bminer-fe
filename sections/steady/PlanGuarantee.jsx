import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const PlanGuarantee = () => {
  return (
    <SectionWrapper>
      <div className="w-full flex flex-col">
        <h1 className="text-[30px] md:text-[48px] text-darkmuted font-semibold">
          1Bitup Steady Plans guarantees{" "}
          <span className="text-yellow100">fixed profits regardless</span> of
          the Bitcoin exchange rate
        </h1>

        <div className="flex flex-col lg:flex-row gap-[80px] bg-[#f8f8f8] p-[40px] rounded-[20px] mt-[40px]">
          <div className="flex flex-col max-w-[470px]">
            <h2 className="text-[32px] text-darkmuted font-semibold">
              What is Steady Plan and what makes it so special?
            </h2>
            <p className="text-[15px] mt-[20px] text-darkmuted">
              Steady Plan was created for convenient participation in the
              Hashrate Market
            </p>
          </div>

          <div className="flex flex-col gap-[15px] max-w-[570px]">
            <p className="text-fivebgrey font-normal text-[18px]">
              It is suitable for any kind of users, whether you are a person
              that is not familiar with computational power systems or
              blockchain technology, or you are an experienced investor in
              modern financial systems, our product is ready made product for
              each of you.
            </p>
            <p className="text-fivebgrey font-normal text-[18px]">
              Steady Hashrate program secures safe returns on your plan for up
              to the next 12 months.
            </p>
            <p className="text-fivebgrey font-normal text-[18px]">
              Users select a desired hashrate under the Steady Plan, and our
              team will manage it to achieve the targeted output efficiently.
            </p>
            <p className="text-fivebgrey font-normal text-[18px]">
              At 1BitUp, we're committed to providing a stable and secure mining
              opportunity in the dynamic world of hashing market.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PlanGuarantee;
