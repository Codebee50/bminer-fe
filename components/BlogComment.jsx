import React from "react";
import InputForm from "./InputForm";

const BlogComment = ({ post }) => {
  return (
    <form className="flex flex-col mt-10 gap-4">
      <p className="text-darkmuted text-[24px] font-semibold mb-[10px]">
        Leave a comment
      </p>
      <InputForm label="Your name" placeholder="Enter your username" />
      <InputForm label="Your email" placeholder="Enter your email"  />
      <input
        type="text"
        name=""
        className="w-full rounded-[24px] mt-5 p-[20px] min-h-[172px] border border-[#e2e2e2] bg-white"
        id=""
      />
    </form>
  );
};

export default BlogComment;
