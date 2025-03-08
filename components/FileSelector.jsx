"use client"
import { useState } from "react";
import React from "react";
import FileUpload from "./FileUpload";

const FileSelector = ({ name, label }) => {
  const [file, setFile] = useState(null);

  const handleFileSelected = (selectedFile) => {
    setFile(selectedFile);
    console.log("File selected:", selectedFile);
  };
  return (
    <div className="flex flex-col">
      <p className="mb-[8px] text-darkmuted text-[16px]">{label}</p>

      <div className="flex flex-col justify-center">
        <div className="w-full">
          <FileUpload onFileSelected={handleFileSelected} name={name} />
        </div>
      </div>
    </div>
  );
};

export default FileSelector;
