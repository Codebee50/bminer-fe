import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectInput = ({
  label,
  optionList = [],
  name,
  required = true,
  placeholder = "Select",
  defaultValue = null,
}) => {
  return (
    <div className="flex flex-col w-full">
      <p className="mb-[8px] text-darkmuted text-[16px]">{label}</p>
      <Select className="" name={name} defaultValue={defaultValue || undefined}>
        <SelectTrigger className="w-full border-[#ececec] bg-white py-[20px] px-[20px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className={"mt-2 shadow-none, w-full"}>
          {optionList.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInput;
