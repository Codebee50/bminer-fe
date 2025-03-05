import React, { useState } from "react";
import DemoDurationTab from "./DemoDurationTab";

const MiningDurationSelector = ({ onValueChanged }) => {
  const [selected, setSelected] = useState(7);
  const tabList = [
    {
      idValue: 7,
      label: "7-days(s)",
      defaultHp: 100,
      durationDays: 7,
    },
    {
      idValue: 14,
      label: "14-days(s)",
      defaultHp: 200,
      durationDays: 14,
    },
    {
      idValue: 21,
      label: "21-days(s)",
      defaultHp: 500,
      durationDays: 21,
    },
  ];

  const handleSelectedChanged = (newSelected) => {
    setSelected(newSelected);
    onValueChanged(tabList.find((item) => item.idValue == newSelected));
  };
  return (
    <div className="flex flex-row items-baseline">
      {tabList.map((tab) => {
        return (
          <DemoDurationTab
            label={tab.label}
            selectedTab={selected}
            onTabClicked={handleSelectedChanged}
            idValue={tab.idValue}
          />
        );
      })}
    </div>
  );
};

export default MiningDurationSelector;
