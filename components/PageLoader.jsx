import React from "react";
import CircleSpinner from "./CircleSpinner";

const PageLoader = ({ height = 80 }) => {
  return (
    <div className={`w-full min-h-[40vh] flex items-center justify-center`}>
      <p className="text-gray-500">
        <CircleSpinner />
      </p>
    </div>
  );
};

export default PageLoader;
