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
