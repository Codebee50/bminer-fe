"use client"
import React from "react";

const LandingCtaButton = ({
  label = "button",
  variant = "yellow",
  onClick = () => {},
}) => {
  return (
    <button
      className={`px-6 py-3.5 max-sm:w-full cursor-pointer rounded-lg ${
        variant == "yellow" ? "bg-yellow100 text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default LandingCtaButton;
