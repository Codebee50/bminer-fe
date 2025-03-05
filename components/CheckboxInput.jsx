import React from "react";

const CheckboxInput = ({
  label = "",
  type = "checkbox",
  name = "",
}) => {
  return (
    <div className="flex flex-row w-full items-center gap-2">
      <input type={type} name={name} id="" />
      <p className="text-darkmuted text-[0.8rem]">{label}</p>
    </div>
  );
};

export default CheckboxInput;
