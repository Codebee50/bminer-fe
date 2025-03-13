"use client";
import FileSelector from "@/components/FileSelector";
import KycDetails from "@/components/KycDetails";
import RegButton from "@/components/RegButton";
import SelectInput from "@/components/SelectInput";
import { makeApiUrl } from "@/constants/beroute";
import useFetchRequest from "@/hooks/useFetch";
import usePostRequest from "@/hooks/usePost";
import { handleGenericError } from "@/utils/errorHandler";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const KycVerification = () => {
  const [kyc, setKyc] = useState(null);
  const kycDocumentOptions = [
    {
      label: "Passport",
      value: "passport",
    },
    {
      label: "Driving license",
      value: "driving_license",
    },
    {
      label: "National id",
      value: "national_id",
    },
    {
      label: "Residence permit",
      value: "residence_permit",
    },
  ];

  const documentVariations = [
    {
      name: "id_document_front",
      label: "Id document front",
    },
    {
      name: "id_document_back",
      label: "Id document back",
    },
    {
      name: "selfie_with_id",
      label: "Selfie with id",
    },
  ];

  const { mutate: getKyc, isLoading: isGettingKyc } = useFetchRequest(
    makeApiUrl("/api/v1/auth/kyc/"),
    (response) => {
      console.log(response.data);
      setKyc(response.data);
    },
    (error) => {
      if (error.status !== 404) {
        toast.error("Failed to get current kyc configurations");
      }
    }
  );

  const { mutate, isLoading } = usePostRequest(
    makeApiUrl("/api/v1/auth/kyc/"),
    (response) => {
      toast.success("Kyc documents submitted successfully");
      getKyc();
    },
    (error) => {
      toast.error(handleGenericError(error));
    },
    "multipart/form-data"
  );

  const handleFormSubmitted = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    mutate(formData);
  };

  useEffect(() => {
    getKyc();
  }, []);
  return (
    <div className="flex flex-col mt-[30px] w-full">
      <div className="w-full flex flex-row gap-5 max-[780px]:flex-col">
        <form className="flex flex-col w-full" onSubmit={handleFormSubmitted}>
          <h2 className="text-[20px] text-darkmuted font-semibold whitespace-nowrap text-start">
            Kyc verification
          </h2>

          {kyc ? (
            <KycDetails kyc={kyc} />
          ) : (
            <div className="w-full flex flex-col gap-5 mt-5">
              <SelectInput
                label={"Document type"}
                optionList={kycDocumentOptions}
                name={"document_type"}
                placeholder="Select the document type"
              />

              <div className="flex flex-col gap-5">
                {documentVariations.map((variation) => {
                  return <FileSelector key={variation.name} {...variation} />;
                })}
              </div>

              <RegButton label="Submit documents" isLoading={isLoading} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default KycVerification;
