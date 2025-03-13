import RegButton from "@/components/RegButton";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import Image from "next/image";

const SpecialOffers = () => {
  return (
    <SectionWrapper pad={true}>
      <div className="w-full bg-[#f4b642] rounded-[24px] p-[60px] flex flex-row">
        <div className="flex flex-col gap-[25px]">
          <h1 className="text-darkmuted text-[40px] font-semibold">
            Special Offers
          </h1>

          <p className="text-[24px] text-darkmuted">
            If you're looking for the best automatic cloud Bitcoin mining
            platform to enjoy endless offers, then Bitcoin miner is your best bet!
          </p>
          <p className="text-[24px] text-darkmuted">
            So, how do you grab our special offer?``
          </p>

          <p className="text-[24px] text-darkmuted">
            Simply sign up as a new user, Navigate to the billing section and
            Enjoy automatic price reduction on any crypto cloud mining plan. You
            can get your volume discount any time during the year, including
            this festive season.
          </p>

          <RegButton label="Get bonus" />
        </div>

        {/* <div>
            <Image src="/spoffer.png" width={20} height={20}/>
        </div> */}
      </div>
    </SectionWrapper>
  );
};

export default SpecialOffers;
