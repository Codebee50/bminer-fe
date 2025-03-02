"use client";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import { navList } from "@/constants/constants";
import { FiUser } from "react-icons/fi";

const TopNav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="padded-section w-full py-3 flex flex-row items-center justify-between sticky top-0 bg-white border-b-[0.4px]">
      <img src={logo.src} alt="Bitcoinminer" />

      <div className="flex flex-row items-center gap-7">
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
          <FiUser />
        ) : (
          <div className="flex flex-row items-center gap-2">
            <p className="text-[#c9c9c9]">Login</p>
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
  );
};

export default TopNav;
