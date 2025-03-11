import React from "react";
import { Check } from "lucide-react";

const FeatureItem = ({ label, value, badge }) => {
  return (
    <div className="border-b border-gray-200 py-[10px]">
      <div className="flex items-start">
        <div className="bg-purple500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
          <Check className="h-[5px] w-[5px] text-white" />
        </div>
        <div>
          {label && <div className="text-[#9a9a9a] text-[12px]">{label}</div>}
          {value && (
            <div className="text-darkmuted text-[14px] font-medium">
              {value}
            </div>
          )}
          {badge && (
            <div className="inline-block bg-greygreen text-green-700 px-[8px] py-[3px] rounded-[5px] text-[12px] mt-2">
              {badge}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
