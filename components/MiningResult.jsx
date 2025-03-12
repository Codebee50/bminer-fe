import React from "react";

const MiningResult = ({ time_period, btc_mined, usd_mined }) => {
  return (
    <div className="styles_wrapper__9_znm">
      <p className="text-white font-semibold px-[15px] self-center">
        {time_period}
      </p>

      <div className="styles_container__X66JH">
        <div className="flex flex-col gap-[5px]">
          <p className="text-white text-[20px] font-semibold whitespace-nowrap">
            ₿ {btc_mined}
          </p>
          <p className="text-white text-[10px]">BTC Mined / Day</p>
        </div>

        <div className="styles_container__divider__SimZO"></div>

        <div className="flex flex-col gap-[5px]">
          <p className="text-white text-[20px] font-semibold whitespace-nowrap">
            $ {usd_mined}
          </p>
          <p className="text-white text-[10px]">Mined / Day</p>
        </div>
      </div>
    </div>
  );
};

export default MiningResult;
