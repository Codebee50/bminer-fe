"use client";

import { useState, useRef } from "react";
import { FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * @typedef {Object} FileUploadProps
 * @property {function} onFileSelected - Callback function when a file is selected
 * @property {string} [acceptedFileTypes="application/pdf"] - Accepted file types
 * @property {string} [className] - Additional CSS classes
 */

export default function FileUpload({
  onFileSelected,
  acceptedFileTypes = "image/*",
  className,
  name,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    setSelectedFile(file);
    onFileSelected?.(file);
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    onFileSelected?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
    );
  };

  const handleClick = () => {
    if (!selectedFile) {
      fileInputRef.current?.click();
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFileTypes}
        onChange={handleFileInputChange}
        className="hidden"
        aria-label="File upload"
        name={name}
        required={true}
      />
      {selectedFile ? (
        <div className="w-full bg-white border rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-red-500" />
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {selectedFile.name}
              </h3>
              <p className="text-sm text-gray-500">
                {selectedFile.type.split("/")[1].toUpperCase()},{" "}
                {formatFileSize(selectedFile.size)}
              </p>
            </div>
            <button
              onClick={handleRemoveFile}
              className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Remove file"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "relative flex flex-col items-center justify-center w-full min-h-[200px] p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-gray-300 hover:border-primary/50",
            className
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-medium text-gray-900">
                Drag your files here
              </h3>
              <p className="text-sm text-gray-500">
                or click to select from directory
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
