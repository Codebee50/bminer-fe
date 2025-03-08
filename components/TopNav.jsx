"use client";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import { navList } from "@/constants/constants";
import { FiUser } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { useSelector } from "react-redux";
import usePostRequest from "@/hooks/usePost";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout as logoutUser } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
import CircleSpinner from "./CircleSpinner";
import Cookies from "js-cookie";

const TopNav = () => {
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { mutate: logout, isLoading: loggingOut } = usePostRequest(
    makeApiUrl("/api/v1/auth/logout/"),
    (response) => {
      toast.success("Logout successful");
      dispatch(logoutUser());
    },
    (error) => {
      toast.error("Logout failed");
    }
  );

  const handleLogOut = () => {
    const refresh = Cookies.get("refreshToken");
    if (refresh) {
      logout({ refresh });
    }
  };
  return (
    <div className="w-full sticky top-0 z-20 bg-white">
      <SectionWrapper pad={false}>
        <div className="w-full py-3 flex flex-row items-center justify-between bg-white border-b-[0.4px]">
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
                <a href="/sign-in" className="text-[#c9c9c9]">
                  Login
                </a>
              </div>
            )}

            {!isAuthenticated && (
              <div className="w-[0.9px] bg-[#c9c9c9] h-[30px]"></div>
            )}

            {isAuthenticated &&
              (loggingOut ? (
                <CircleSpinner />
              ) : (
                <button
                  className="bg-yellow100 text-white py-[12px] px-[15px] rounded-[12px] text-sm cursor-pointer"
                  onClick={handleLogOut}
                >
                  Sign Out
                </button>
              ))}

            {!isAuthenticated && (
              <a
                className="bg-yellow100 text-white py-[12px] px-[15px] rounded-[12px] text-sm cursor-pointer"
                href="/sign-up"
              >
                Sign up
              </a>
            )}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TopNav;
