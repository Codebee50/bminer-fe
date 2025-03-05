"use client";

import React, { useState } from "react";
import EditUserDetails from "./settings/EditUserDetails";
import ChangeDetails from "./settings/ChangeDetails";

const SettingSection = () => {
  const [selectedSection, setSelectedSection] = useState(1);

  const tabList = [
    { id: 1, name: "General" },
    { id: 2, name: "Change details" },
    { id: 3, name: "BTC withdrawal wallet" },
    { id: 4, name: "2FA" },
    { id: 5, name: "KYC/AML" },
  ];

  const sectionMapping = {
    1: <EditUserDetails />,
    2: <ChangeDetails />,
  };

  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex flex-col bg-[#fafafa] rounded-[16px] p-[24px]">
        <div className="flex w-full items-center flex-row overflow-x-scroll no-scrollbar gap-[30px]">
          {tabList.map((tab) => {
            return (
              <button
                className={`text-[20px] hover:text-darkmuted cursor-pointer whitespace-nowrap ${
                  tab.id == selectedSection
                    ? "text-black font-medium underline"
                    : "text-[#9a9a9a] font-normal"
                }`}
                onClick={setSelectedSection.bind(null, tab.id)}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {sectionMapping[selectedSection] || <div></div>}
      </div>
    </section>
  );
};

export default SettingSection;
