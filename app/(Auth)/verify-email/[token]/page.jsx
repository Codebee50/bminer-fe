"use client";

import PageLoader from "@/components/PageLoader";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import { handleGenericError } from "@/utils/errorHandler";
import TopNav from "@/components/TopNav";
import { useRouter } from "next/navigation";

const Page = () => {
  const { token } = useParams();
  const [error, setError] = useState(null);

  const router = useRouter();

  const { mutate, isLoading } = useFetchRequest(
    makeApiUrl(`/api/v1/auth/verify-email/${token}/`),
    (response) => {
      toast.success("Account verified successfully");
      router.push("/sign-in");
    },
    (error) => {
      toast.error(handleGenericError(error));
      setError(
        `Your verification link is either expired or invalid. Please request a new one to complete your verification.`
      );
    }
  );

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <TopNav />

      <section className="w-full h-[80vh] flex items-center justify-center">
        {error && <p>{error}</p>}
      </section>
    </>
  );
};

export default Page;
