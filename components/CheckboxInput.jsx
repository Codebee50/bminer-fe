import React from "react";

const CheckboxInput = ({
  label = "",
  type = "checkbox",
  name = "",
  defaultChecked = false,
}) => {
  return (
    <div className="flex flex-row w-full items-center gap-2">
      <input type={type} name={name} id="" defaultChecked={defaultChecked} />
      <p className="text-darkmuted text-sm">{label}</p>
    </div>
  );
};

export default CheckboxInput;
