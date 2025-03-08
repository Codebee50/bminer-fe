import React from "react";

const NumberedRowStat = ({ number, text }) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="bg-[#815aac] w-[26px] h-[26px] flex items-center justify-center rounded-full shrink-0 ">
        <p className="text-white text-[16px]">{number}</p>
      </div>
      <p className="text-[#5b5b5b] text-[16px]">
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default NumberedRowStat;
