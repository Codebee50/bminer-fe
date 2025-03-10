"use client";
import Home from "@/sections/account/Home";
import SectionWrapper from "@/components/SectionWrapper";
import TopNav from "@/components/TopNav";
import { useParams } from "next/navigation";
import React from "react";
import BuyHashpower from "@/sections/account/BuyHashpower";
import Footer from "@/components/Footer";
import DemoMining from "@/sections/account/DemoMining";
import MyContracts from "@/sections/account/MyContracts";
import AuthProtected from "@/components/AuthProtected";
import UserCard from "@/components/UserCard";
import SettingSection from "@/sections/account/SettingSection";
import Referrals from "@/sections/account/Referrals";
import RightSider from "@/components/RightSider";
import BtcWallet from "@/sections/account/settings/BtcWallet";
import Notifications from "@/sections/account/Notifications";
import PaymentSection from "@/sections/account/PaymentSection";

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

  if (currentSection == "referrals") {
    return <Referrals />;
  }

  if (currentSection == "notifications") {
    return <Notifications />;
  }

  if (currentSection == "payment") {
    return <PaymentSection />;
  }

  return <Home />;
};

const Page = () => {
  const { section } = useParams();

  return (
    <AuthProtected>
      <section className="flex flex-col">
        <TopNav />
        <SectionWrapper pad={false}>
          <div className="w-full flex flex-col br1050:flex-row mt-[50px] gap-20">
            <div className="w-[20%] max-br1050:hidden">
              <UserCard />

              <RightSider />
            </div>

            <div className="br1050:hidden w-full">
              <UserCard mobile={true} />
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
