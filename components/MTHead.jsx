import React from "react";
import { TableHead } from "./ui/table";
const MTHead = ({ label }) => {
  return <TableHead className={"p-[30px] text-[18px] font-medium text-[#5b5b5b]"}>{label}</TableHead>;
};

export default MTHead;
