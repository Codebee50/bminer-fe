import React from "react";

const DemoDurationTab = ({
  label,
  selectedTab,
  onTabClicked = () => {},
  idValue,
}) => {
  return (
    <div
      onClick={onTabClicked.bind(null, idValue)}
      className={`px-5 py-3 cursor-pointer font-medium ${
        selectedTab == idValue
          ? "text-primaryPurple border-b-primaryPurple"
          : ""
      } hover:text-primaryPurple border-b-[2px] border-b-[hsla(0,0%,7%,0.161)] text-[20px]  hover:border-b-primaryPurple`}
    >
      {label}
    </div>
  );
};

export default DemoDurationTab;
