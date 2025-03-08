import React from "react";

const InputForm = ({
  label = "",
  placeholder = "",
  type = "text",
  name = "",
  initial = null,
  value = null,
  required = true,
  readOnly = false,
  isDisabled=false,
}) => {
  return (
    <div className="flex flex-col w-full">
      <p className="mb-[8px] text-darkmuted text-[16px]">{label}</p>
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        className="border border-[#ececec] bg-white rounded-[12px] py-[14px] px-[20px] w-full disabled:opacity-40 disabled:cursor-not-allowed"
        required={required}
        {...(value !== null
          ? { value }
          : initial !== null
          ? { defaultValue: initial }
          : {})}
        readOnly={readOnly}
        disabled={isDisabled}
      />
    </div>
  );
};

export default InputForm;
