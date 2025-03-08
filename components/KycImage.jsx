import React from "react";

const KycImage = ({ docImage, label, submitted_at }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="relative aspect-[4/3] bg-muted">
        <img src={docImage} alt={label} className="object-cover h-[200px] w-full object-center" />
      </div>

      <div className="p-3">
        <h3 className="font-medium">{label}</h3>
        <p className="text-xs text-muted-foreground mt-1">
          Uploaded: {formatDate(submitted_at)}
        </p>
      </div>
    </div>
  );
};

export default KycImage;
