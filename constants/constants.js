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
import { TbGraph } from "react-icons/tb";
import { LuBellRing } from "react-icons/lu";

export const navList = [
  {
    label: "% SALE",
    link: "/bestoffers",
  },
  {
    label: "Cloud Mining",
    link: "/cloud-mining",
  },
  {
    label: "Calculator",
    link: "/calculator",
  },
  {
    label: "Steady Mining",
    link: "/steady",
  },
  {
    label: "FAQ",
    link: "/faq",
  },

  {
    label: "Referral",
    link: "/referral",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const primaryMenuItems = [
  { id: 1, name: "My accounts", icon: HiOutlineUser, path: "/account/home" },
  {
    id: 2,
    name: "Buy hashpower",
    icon: TiTag,
    path: "/account/buy-hashpower",
  },
  { id: 3, name: "Demo Mining", icon: TbGraph, path: "/account/demo" },
  {
    id: 4,
    name: "My contracts",
    icon: IoBookmarksOutline,
    path: "/account/my-contracts",
  },
  {
    id: 5,
    name: "Notifications",
    icon: LuBellRing,
    path: "/account/notifications",
  },
];
export const secondaryMenuItems = [
  {
    id: 2,
    name: "Settings",
    icon: MdOutlineCandlestickChart,
    path: "/account/settings",
  },
  {
    id: 1,
    name: "Referral",
    icon: RiUserAddLine,
    path: "/account/referrals",
  },

  {
    id: 4,
    name: "Feedback",
    icon: LuPencilLine,
    path: "https://docs.google.com/document/d/1UvDq8nvPY9s5zhJ8VQrYGCv6TNlKDi26WfRpaQosZNM/edit?usp=sharing",
    newTab: true,
  },
];

export const faqs = [
  {
    question: "How will I receive my earnings?",
    answer:
      "Your earnings will be automatically credited to your account wallet on our platform. From there, you can choose to withdraw them to your personal cryptocurrency wallet or reinvest them in new mining contracts. We process withdrawals within 24-48 hours for security purposes.",
  },
  {
    question: "When can I expect to receive my income?",
    answer:
      "Mining rewards are calculated and distributed daily. You can expect to see your earnings updated in your account every 24 hours. The exact timing may vary depending on network conditions and mining difficulty.",
  },
  {
    question: "Is it possible to cancel an accidental purchase?",
    answer:
      "Yes, you can request to cancel an accidental purchase within 24 hours of the transaction. Please contact our support team immediately. Note that cancellation might be subject to processing fees and market conditions.",
  },
  {
    question: "Is participating in cloud mining profitable?",
    answer:
      "Profitability in cloud mining depends on various factors including Bitcoin price, mining difficulty, and electricity costs. While we strive to maintain competitive rates, returns can vary. We recommend reviewing our profit calculator and market conditions before investing.",
  },
  {
    question: "What are the risks involved in cloud mining?",
    answer:
      "Like any investment, cloud mining carries certain risks. These include market volatility, changes in mining difficulty, and operational risks. We mitigate these through professional management and transparent operations, but it's important to understand that returns are not guaranteed.",
  },
  {
    question: "What is Cloud Mining?",
    answer:
      "Cloud mining is a mechanism to mine cryptocurrencies like Bitcoin without having to install and maintain mining hardware yourself. Instead, you purchase mining power from our professional mining facilities, and we handle all the technical aspects while you receive the mining rewards.",
  },
];

export function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "numeric", // Full month name
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short", // Includes the time zone
  };

  return date.toLocaleDateString("en-US", options);
}
