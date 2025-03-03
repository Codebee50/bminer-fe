"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import PostCard from "@/components/PostCard";
import { BsArrowRight } from "react-icons/bs";

const LatestNewsSection = ({heading="Latest news"}) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const getBlogs = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/api/posts/");
    console.log("the response is", response);
    if (response.status == 200) {
      setBlogPosts(response.data.results);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="w-full bg-[#f8f8f8] mt-20 flex flex-col rounded-[24px] p-[60px]">
      <div className="w-full flex flex-row justify-between">
        <p className="text-darkmuted text-[40px] font-semibold">{heading}</p>

        <div className="flex flex-row items-center gap-1">
          <a href="/blog" className="underline text-darkmuted text-[14px] font-semibold">Visit our blog</a>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 justify-start items-start mt-10">
        {blogPosts.slice(0, 3).map((post) => {
          return (
            <PostCard
              {...post}
              author_name={post.author.name}
              key={post.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestNewsSection;
