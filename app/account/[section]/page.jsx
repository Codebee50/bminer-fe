"use client";
import Home from "@/sections/account/Home";
import SectionWrapper from "@/components/SectionWrapper";
import TopNav from "@/components/TopNav";
import { useParams } from "next/navigation";
import React from "react";
import BuyHashpower from "@/sections/account/BuyHashpower";
import {
  FaUser,
  FaShoppingCart,
  FaChartLine,
  FaFileContract,
  FaExchangeAlt,
} from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { TiTag } from "react-icons/ti";
import { IoBookmarksOutline } from "react-icons/io5";
import { RiTokenSwapLine } from "react-icons/ri";
import { RiUserAddLine } from "react-icons/ri";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";

const getSection = (currentSection) => {
  if (currentSection == "buy-hashpower") {
    return <BuyHashpower />;
  }
  return <Home />;
};

const Page = () => {
  const { section } = useParams();
  const primaryMenuItems = [
    { id: 1, name: "My accounts", icon: HiOutlineUser, path: "/account/home" },
    {
      id: 2,
      name: "Buy hashpower",
      icon: TiTag,
      path: "/account/buy-hashpower",
    },
    { id: 3, name: "Demo Mining", icon: FaChartLine, path: "/demo-mining" },
    {
      id: 4,
      name: "My contracts",
      icon: IoBookmarksOutline,
      path: "/contracts",
    },
    {
      id: 5,
      name: "Transactions",
      icon: RiTokenSwapLine,
      path: "/transactions",
    },
  ];
  const secondaryMenuItems = [
    {
      id: 2,
      name: "Settings",
      icon: MdOutlineCandlestickChart,
      path: "/buy-hashpower",
    },
    { id: 1, name: "Referral", icon: RiUserAddLine, path: "/accounts" },

    {
      id: 4,
      name: "Feedback",
      icon: LuPencilLine,
      path: "/contracts",
    },
  ];
  return (
    <section>
      <TopNav />
      <SectionWrapper pad={false}>
        <div className="w-full flex flex-row mt-[50px] gap-20">
          <div className="w-[20%]">
            <div className="w-full rounded-lg px-3 py-5 flex flex-row items-center bg-darkmuted gap-4">
              <div className="w-[46px] h-[46px] rounded-full bg-[#815aac] flex items-center justify-center text-white">
                <p>OU</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#c9c9c9]">Welcome</p>
                <p className="text-white">Onuh Udo</p>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <p className="text-[16px] text-[#c9c9c9] mt-[40px] ml-[20px]">
                PRIMARY
              </p>
              <div className="flex flex-col gap-5 mt-5">
                {primaryMenuItems.map((menuItem) => {
                  return (
                    <a
                      className="flex flex-row items-center gap-4 rounded-[6px] py-[10px] px-[20px] transition-all delay-75 text-[18px] hover:bg-faintpurple hover:font-semibold"
                      key={menuItem.name}
                      href={menuItem.path}
                    >
                      <menuItem.icon />
                      <p className="whitespace-nowrap">{menuItem.name}</p>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="w-[70%] h-[1px] bg-darkmuted opacity-20 mt-10"></div>

            <div className="w-full flex flex-col">
              <p className="text-[16px] text-[#c9c9c9] mt-[20px] ml-[20px]">
                SECONDARY
              </p>

              <div className="flex flex-col gap-5 mt-5">
                {secondaryMenuItems.map((menuItem) => {
                  return (
                    <a
                      className="flex flex-row items-center gap-4 rounded-[6px] py-[10px] px-[20px] transition-all delay-75 text-[18px] hover:bg-faintpurple hover:font-semibold"
                      key={`nav-item-${menuItem.name}`}
                      href={menuItem.path}
                    >
                      <menuItem.icon />
                      <p className="whitespace-nowrap">{menuItem.name}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-[80%]">{getSection(section)}</div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Page;
