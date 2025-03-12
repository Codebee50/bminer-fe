import React from "react";
import InputForm from "./InputForm";
import RegButton from "./RegButton";
import usePostRequest from "@/hooks/usePost";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import { handleGenericError } from "@/utils/errorHandler";

const BlogComment = ({ post }) => {
  const { mutate, isLoading } = usePostRequest(
    makeApiUrl("/api/v1/api/comments/"),
    (response) => {
      toast.success("Comment submitted successfully");
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("post", post?.id);

    mutate(formData);
  };
  return (
    <form className="flex flex-col mt-10 gap-4" onSubmit={handleSubmitComment}>
      <p className="text-darkmuted text-[24px] font-semibold mb-[10px]">
        Leave a comment
      </p>
      <InputForm
        label="Your name"
        placeholder="Enter your username"
        name="name"
      />
      <InputForm
        label="Your email"
        placeholder="Enter your email"
        name="email"
      />
      <input
        type="text"
        name="content"
        placeholder="Enter your comment"
        className="w-full rounded-[24px] mt-5 px-[20px] min-h-[172px] border border-[#e2e2e2] bg-white"
      />
      <RegButton label="Submit" isLoading={isLoading} />
    </form>
  );
};

export default BlogComment;
