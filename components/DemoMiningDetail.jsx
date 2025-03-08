import React from "react";
import DetailLine from "@/components/DetailLine";
import { LuPrinter } from "react-icons/lu";
const DemoMiningDetail = ({ miningPlans }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-darkmuted font-medium">#{miningPlans?.id}</p>
      <div className="w-full flex flex-col md:flex-row gap-4 py-4">
        <div className="w-full flex flex-col gap-3">
          <DetailLine label={"Price"} value={`${miningPlans?.price}`} />
          <DetailLine
            label={"HashPower"}
            value={`${miningPlans?.hashpower}TH/s`}
          />
          <DetailLine
            label={"Start date"}
            value={miningPlans?.start_date_formatted}
          />
          <DetailLine
            label={"End date"}
            value={miningPlans?.end_date_formatted}
          />

          <div className="text-primaryPurple">
            <LuPrinter onClick={handlePrint} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <DetailLine label={"Status"} value={miningPlans?.status} />
          <DetailLine
            label={"Earned total, BTC:"}
            value={miningPlans?.earned_total_btc}
          />
          <DetailLine
            label={"Earned total, USD*:"}
            value={miningPlans?.earned_total_usd}
          />
          <DetailLine
            label={"Last updated:"}
            value={miningPlans?.last_updated}
          />
          <DetailLine
            label={"Next update**:"}
            value={miningPlans?.next_update}
          />

          <p className="text-[12px] text-[#848199]">
            **Value in USD is calculated according to Current BTC USD price
          </p>
          <p className="text-[12px] text-[#848199]">
            ** Mining date update is done once per day. The update timing is
            approximate and may vary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoMiningDetail;
