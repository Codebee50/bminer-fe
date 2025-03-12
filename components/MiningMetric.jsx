import React from "react";

const MiningMetric = ({ title, description, formula }) => {
  return (
    <div className="w-full max-w-6xl mx-auto border-b border-b-[#ececec] py-8 my-8">
      <div className="grid md:grid-cols-2 gap-8 px-4">
        <div>
          <h2 className="text-2xl font-semibold text-darkmuted">{title}</h2>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            {description}
          </p>
          <p className="font-medium text-gray-700">
            {formula}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiningMetric;
