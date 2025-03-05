import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const ExperienceAdvantageSection = () => {
  return (
    <SectionWrapper pad={false}>
      <h2 className="text-[30px] sm:text-[40px] text-[#373737] font-semibold text-center mt-[200px]  max-br1270:mt-[50px]">
        Experience the advantages of our Bitcoinminer Cloud Mining company
      </h2>
      <div className="flex w-full lg:h-[570px] gap-[30px] mt-5 max-lg:flex-col">
        <div className="relative lg:flex-[1_1] bg-gradient-to-b from-[#6835a0] to-[#26133a] rounded-[24px] h-[70vh] lg:h-full ">
          <p className="text-[25px] br450:text-[32px] text-white text-left ml-[30px] mt-[30px] mb-[10px] font-semibold">
            Mine leading cryptocurrencies with ease using our customizable
            plans.
          </p>
          <img
            src="/advantages.png"
            alt=""
            className="absolute right-0 max-w-[70%] bottom-[54px]"
          />
        </div>

        <div className="flex-[2_1] flex flex-col ">
          <div className="flex flex-[1_1] gap-[30px] max-lg:flex-col">
            <div className="bg-grey200 relative lg:flex-[5_1] rounded-3xl h-[30vh] lg:h-[270px]">
              <p className="text-[48px] text-darkmuted mt-[30px] ml-[30px] font-semibold ">
                300,3 Ph/s
              </p>
              <p className="text-[24px] text-darkmuted ml-[30px] mb-[1rem]">
                Under management{" "}
              </p>
              <img
                src="/document.png"
                className="absolute bottom-[12px] right-[16px] max-br450:hidden"
                alt=""
              />
            </div>

            <div className="lg:flex-[3_1] border border-[#ececec] flex flex-col items-center justify-center h-[270px] rounded-3xl">
              <p className="text-[24px] font-medium text-darkmuted">
                Daily accruals
              </p>
              <p className="text-[20px] text-[#5b5b5b] font-[300] mt-5">
                No withdrawal fees
              </p>
            </div>
          </div>
          <div className="flex lg:flex-[1_1] gap-[30px] max-lg:flex-col">
            <div className="lg:flex-[3_1] max-lg:h-[30vh] border border-[#ececec] flex flex-col items-center justify-center rounded-3xl max-lg:mt-7">
              <img src="/pricetag.png" alt="" />
              <p className="text-center text-[18px] br450:text-[24px] font-medium text-darkmuted">
                Zero maintenance fees
              </p>
            </div>

            <div className="bg-yellow100 relative overflow-hidden lg:flex-[5_1] h-[50vh] lg:h-[270px] rounded-3xl">
              <p className="text-[32px] w-[80%] mt-[20px] ml-[30px] text-white font-semibold leading-[1.2]">
                Instant mining activation upon purchase
              </p>
              <img
                src="/webhome.png"
                className="absolute left-[50%] transform-[translate(-50%)] w-[90%] bottom-0 "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceAdvantageSection;
