"use client";
import React from "react";

const LandingCtaButton = ({
  label = "button",
  variant = "yellow",
  onClick = () => {},
  anchor = false,
  href = "/",
}) => {
  const classname = `px-6 py-3.5 max-sm:w-full cursor-pointer rounded-lg ${
    variant == "yellow" ? "bg-yellow100 text-white" : "bg-white text-black"
  }`;

  const getElement = () => {
    return anchor ? (
      <a className={classname} href={href}>
        {label}
      </a>
    ) : (
      <button className={classname} onClick={onClick}>
        {label}
      </button>
    );
  };
  return getElement();
};

export default LandingCtaButton;
