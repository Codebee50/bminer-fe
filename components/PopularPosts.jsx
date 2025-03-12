"use client";
import React from "react";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { makeApiUrl } from "@/constants/beroute";

const PopularPosts = ({ heading = "Popular posts" }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const getBlogs = async () => {
    const response = await axios.get(makeApiUrl("/api/v1/api/posts/popular/"));
    if (response.status == 200) {
      setBlogPosts(response.data);
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
          <BsArrowLeft size={50} className="cursor-pointer opacity-50" />
          <BsArrowRight size={50} className="cursor-pointer" />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 justify-start items-start mt-10">
        {blogPosts.map((post) => {
          return (
            <PostCard
              {...post}
              author_name={post.author.name}
              key={post.title}
              featured_image={makeApiUrl(post?.featured_image)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularPosts;
