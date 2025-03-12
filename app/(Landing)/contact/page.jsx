import React from "react";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import ContactPage from "@/sections/contact/ContactPage";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
