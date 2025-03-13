import React from "react";
import SectionWrapper from "./SectionWrapper";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { PiXBold } from "react-icons/pi"; // X (Twitter) icon from Phosphor Icons

const Footer = () => {
  const footerLinks = [
    {
      category: "Company",
      links: [
        { name: "About", url: "/about" },
        { name: "Why Mining?", url: "/why-mining" },
        { name: "Cloud Mining", url: "/cloud-mining" },
        { name: "Blog", url: "/blog" },
        { name: "Referral", url: "/referral" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      category: "Links",
      links: [
        { name: "Terms of use", url: "/terms-of-use" },
        { name: "Privacy policy", url: "/privacy-policy" },
        { name: "Support", url: "/support" },
        { name: "Disclaimer", url: "/disclaimer" },
        { name: "FAQ", url: "/faq" },
      ],
    },
  ];

  return (
    <footer className="w-full min-h-[60vh] flex flex-col bg-darkmuted border-t-[6px]  border-t-brightyellow mt-10">
      <SectionWrapper pad={false}>
        <div className="flex flex-col pt-20">
          <div className="flex flex-row flex-wrap items-start justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-[500px]">
              <img src="/logowhite.svg" className="w-[100px]" alt="" />

              <p className="text-[16px] text-[#b3b3b3]">
                Trading Way FZCO - Dubai Silicon Oasis, PO Box 341041, Dubai,
                UAE, Dubai Digital Park – Building A1
              </p>
              <div className="space-x-4 flex flex-row items-center  w-full overflow-x-scroll no-scrollbar">
                {[
                  { icon: FaFacebookF },
                  { icon: FaTelegramPlane },
                  { icon: FaLinkedinIn },
                  { icon: PiXBold }, // Replacing FaXTwitter with PiXBold
                  { icon: FaTiktok },
                  { icon: FaYoutube },
                ].map(({ icon: Icon }, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300 transition"
                  >
                    <Icon className="text-2xl" />
                  </div>
                ))}
              </div>
            </div>

            {footerLinks.map((footerLink) => {
              return (
                <div
                  className="flex flex-col gap-[10px]"
                  key={footerLink.category}
                >
                  <p className="text-[18px] font-medium text-white">
                    {footerLink.category}
                  </p>
                  {footerLink.links.map((link) => {
                    return (
                      <a
                        className="text-[16px] text-[#b3b3b3]"
                        href={link.url}
                        key={link.name}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              );
            })}

            <div className="flex flex-col gap-[10px]">
              <p className="text-[18px] font-medium text-white">Contact</p>
              <div className="flex flex-col">
                <p className="text-[16px] text-[#b3b3b3]">E-mail:</p>
                <a className="text-white ">official@1bitminner.com</a>
              </div>
              <div className="flex flex-col">
                <p className="text-[16px] text-[#b3b3b3]">Call phone:</p>
                <a className="text-white ">+13128204509</a>
              </div>
            </div>
          </div>

          <div className="border-t border-t-grey400 mt-7 pt-[20px]">
            <p className="text-[16px] text-[#b3b3b3]">
              © 2025 Bitcoin miner. All rights reserved
            </p>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
