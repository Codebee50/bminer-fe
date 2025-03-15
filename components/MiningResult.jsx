import React from "react";

const MiningResult = ({ time_period, btc_mined, usd_mined }) => {
  return (
    <div className="bg-white/10 rounded-xl grid grid-cols-1 md:grid-cols-[minmax(0,150px)_minmax(0,348px)] grid-rows-[minmax(66px,auto)]">
      <p className="text-white font-semibold px-[15px] self-center">
        {time_period}
      </p>

      <div className="bg-[#815aac] rounded-xl grid sm:grid-cols-[auto_1px_auto] gap-7 p-3 px-7">
        <div className="flex flex-col gap-[5px]">
          <p className="text-white text-[20px] font-semibold whitespace-nowrap">
            ₿ {btc_mined}
          </p>
          <p className="text-white text-[10px]">BTC Mined / Day</p>
        </div>

        <div className="styles_container__divider__SimZO max-sm:hidden"></div>

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
