"use client";
import SectionWrapper from "@/components/SectionWrapper";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import usePostRequest from "@/hooks/usePost";
import { makeApiUrl } from "@/constants/beroute";
import CircleSpinner from "@/components/CircleSpinner";
import { toast } from "react-toastify";
const FaqContactSection = () => {
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  const formRef = useRef();

  const { mutate, isLoading } = usePostRequest(
    makeApiUrl("/api/v1/auth/enquiry/"),
    (response) => {
      toast.success("Enquiry submitted successfully");
      if (formRef.current) {
        formRef.current.reset();
      }
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (isAuthenticated) {
      formData.append("name", userInfo?.full_name),
        formData.append("email", userInfo?.email);
    }
    mutate(formData);
  };

  return (
    <SectionWrapper pad={false}>
      <div className="w-full grid grid-cols-[minmax(0,462px)_minmax(0,482px)] justify-between gap-8 bg-gradient-to-b from-[#6835a0] to-[#3f1d65] rounded-[24px] p-[60px] max-lg:grid-cols-1">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[48px] text-white font-semibold">
            Contact Customer Service
          </h2>
          <p className="text-white opacity-75">
            Keep in mind that the quality and promptness of our response depends
            on how accurately you fill out the Contact form. We are happy to
            answer your questions!
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="space-y-6">
              {!isAuthenticated && (
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-4 rounded-md border border-white text-white placeholder-purple-300 focus:outline-none focus:ring-2"
                    required
                  />
                </div>
              )}

              {!isAuthenticated && (
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="w-full p-4 rounded-md  border border-white text-white placeholder-purple-300 focus:outline-none focus:ring-2"
                    required
                  />
                </div>
              )}

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  className="w-full p-4 rounded-md border border-white text-white placeholder-purple-300 focus:outline-none focus:ring-2"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="h-5 w-5 rounded border-white text-purple-900"
                  required
                />
                <label
                  htmlFor="consent"
                  className="ml-2 text-sm text-white opacity-60"
                >
                  I consent to the processing of my personal data
                </label>
              </div>

              {isLoading ? (
                <CircleSpinner />
              ) : (
                <div>
                  <button
                    type="submit"
                    className="w-max py-3 px-9 bg-yellow100 hover:bg-purple-900 rounded-md transition-colors duration-200 text-white font-medium"
                  >
                    Send
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FaqContactSection;
