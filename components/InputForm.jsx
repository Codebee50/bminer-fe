import React from "react";

const InputForm = ({
  label = "",
  placeholder = "",
  type = "text",
  name = "",
  required = true,
}) => {
  return (
    <div className="flex flex-col w-full">
      <p className="mb-[8px] text-darkmuted text-[16px]">{label}</p>
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        className="border border-[#ececec] bg-white rounded-[12px] py-[14px] px-[20px] w-full "
        required={required}
      />
    </div>
  );
};

export default InputForm;
