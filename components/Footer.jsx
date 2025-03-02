import React from "react";
import SectionWrapper from "./SectionWrapper";

const Footer = () => {
  return (
    <SectionWrapper>
      <footer className="flex flex-row items-start justify-between bg-red-300 ">
        <div className="flex flex-col">
          <img src="/logo.svg" alt="" />
        </div>
      </footer>
    </SectionWrapper>
  );
};

export default Footer;
