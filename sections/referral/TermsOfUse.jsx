import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const TermsOfUse = () => {
  const rules = [
    "Do not use your referral link to create duplicate accounts.",
    "Avoid claiming official representation of our service.",
    "Refrain from accepting payments for mining hashpower on our behalf.",
    "Do not make unreal promises to your affiliates.",
  ];

  return (
    <SectionWrapper pad={false}>
      <div className="w-full flex flex-col">
        <div className="w-full max-w-6xl mx-auto  py-8 my-8">
          <div className="grid md:grid-cols-2 gap-8 px-4">
            <div className="flex-[0_1_456px]">
              <h2 className="text-2xl font-semibold text-darkmuted text-[48px]">
                Referral Program Terms of Use
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-[#585858] text-[20px]">
                Payments within the affiliate program are made on the basis of
                btc cloud mining referral code in Bitcoins directly to your
                account. You can earn between 2% and 6% of the contract value
                for each unique user you bring in. Plus 2% from any subsequent
                purchase.
              </p>
              <p className="text-[#585858] text-[20px]">
                Please note that these affiliate rewards may be subject to
                change overtime. In such cases, any accrued funds will remain in
                your account.
              </p>
            </div>
          </div>
        </div>
        <section className="w-full p-[60px] bg-[#f8f8f8] flex flex-col gap-[10px] rounded-[24px] mt-[40px]">
          <h2 className="text-[32px] font-medium mb-[20px]">
            It's important to adhere to the following guidelines:
          </h2>
          {/* <p className="text-[20px] text-[#5b5b5b]">
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
          </p> */}

          {rules.map((info) => (
            <div className="flex flex-row items-center gap-3">
              <div className="h-[20px] w-[20px] rounded-full bg-yellow100"></div>
              <p className="text-[20px] text-[#5b5b5b]">{info}</p>
            </div>
          ))}

          <p className="text-[20px] text-[#5b5b5b] mt-[50px]">
            Violations of these rules may lead to exclusion from our affiliate
            program and cancellation of credited affiliate commissions. You, as
            the affiliate, are responsible for ensuring the security of your
            authentication data (login and password) when accessing your
            account.
          </p>

          <p className="text-[20px] text-[#5b5b5b]">
            Please be aware that these conditions are subject to unilateral
            changes without prior notification to participants.
          </p>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default TermsOfUse;
