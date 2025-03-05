"use client";

import React from "react";
import CircleSpinner from "./CircleSpinner";

const RegButton = ({
  label = "",
  onClick = () => {},
  full = false,
  isLoading = false,
}) => {
  if (isLoading) {
    return <CircleSpinner />;
  }
  return (
    <button
      className={`capitalize  cursor-pointer bg-darkmuted text-white text-[14px] font-medium ${
        full ? "w-full" : "w-[190px]"
      } rounded-[12px] py-[12px] disabled:opacity-45 disabled:cursor-pointer`}
      onClick={onClick}
      disabled={isLoading}
    >
      {label}
    </button>
  );
};

export default RegButton;
