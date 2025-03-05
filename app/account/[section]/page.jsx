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
import Footer from "@/components/Footer";
import DemoMining from "@/sections/account/DemoMining";
import MyContracts from "@/sections/account/MyContracts";
import AuthProtected from "@/components/AuthProtected";
import UserCard from "@/components/UserCard";
import SettingSection from "@/sections/account/SettingSection";

const getSection = (currentSection) => {
  if (currentSection == "buy-hashpower") {
    return <BuyHashpower />;
  }

  if (currentSection == "demo") {
    return <DemoMining />;
  }

  if (currentSection == "my-contracts") {
    return <MyContracts />;
  }

  if (currentSection == "settings") {
    return <SettingSection />;
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
    { id: 3, name: "Demo Mining", icon: FaChartLine, path: "/account/demo" },
    {
      id: 4,
      name: "My contracts",
      icon: IoBookmarksOutline,
      path: "/account/my-contracts",
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
      path: "/account/settings",
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
    <AuthProtected>
      <section className="flex flex-col">
        <TopNav />
        <SectionWrapper pad={false}>
          <div className="w-full flex flex-col br1050:flex-row mt-[50px] gap-20">
            <div className="w-[20%] max-br1050:hidden">
              <UserCard />

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

            <div className="br1050:hidden w-full">
              <UserCard />
            </div>
            <div className="w-full br1050:w-[80%]">{getSection(section)}</div>
          </div>
        </SectionWrapper>

        <Footer></Footer>
      </section>
    </AuthProtected>
  );
};

export default Page;
