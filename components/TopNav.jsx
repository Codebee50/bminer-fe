"use client";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import { navList } from "@/constants/constants";
import { FiUser } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { useSelector } from "react-redux";

const TopNav = () => {
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  return (
    <SectionWrapper pad={false}>
      <div className="w-full py-3 flex flex-row items-center justify-between sticky top-0 bg-white border-b-[0.4px] z-20">
        <a href="/">
          <img src={logo.src} alt="Bitcoinminer" />
        </a>

        <div className="flex flex-row items-center gap-7 max-xl:hidden">
          {navList.map((navItem) => {
            return (
              <a
                href={navItem.link}
                className="text-sm"
                key={`nav-${navItem.label}`}
              >
                {navItem.label}
              </a>
            );
          })}
        </div>

        <div className="flex flex-row items-center gap-4">
          {isAuthenticated ? (
            <a href="/account/home">
              <FiUser size={20} />
            </a>
          ) : (
            <div className="flex flex-row items-center gap-2">
              <a href="/sign-in" className="text-[#c9c9c9]">Login</a>
            </div>
          )}

          {!isAuthenticated && (
            <div className="w-[0.9px] bg-[#c9c9c9] h-[30px]"></div>
          )}

          <button className="bg-yellow100 text-white py-[12px] px-[15px] rounded-[12px] text-sm    ">
            Sign Out
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopNav;
