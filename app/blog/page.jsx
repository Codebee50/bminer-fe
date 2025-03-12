"use client";
import Footer from "@/components/Footer";
import PopularPosts from "@/components/PopularPosts";
import PostCard from "@/components/PostCard";
import SectionWrapper from "@/components/SectionWrapper";
import TopNav from "@/components/TopNav";
import { makeApiUrl } from "@/constants/beroute";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Page = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [highlightedPost, setHighlightedPost] = useState(null);
  const getBlogs = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/api/posts/");
    console.log("the response is", response);
    if (response.status == 200) {
      setBlogPosts(response.data.results);
      setHighlightedPost(response.data.results[0]);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <section>
      <TopNav />
      <SectionWrapper pad={false}>
        <div className="flex flex-row items-center gap-3 pt-4 font-medium">
          <a className="text-[#5b5b5b]" href="/">
            Home
          </a>
          <div className="bg-[#b3b3b3] w-[1px] h-[18px]"></div>
          <a className="text-darkmuted">Blog</a>
        </div>
        <div className="flex flex-col">
          <div className="w-full flex flex-row items-center justify-between mt-5">
            <h1 className="text-[60px] text-darkmuted font-semibold">
              Our Blog
            </h1>

            <div className="flex relative w-full max-w-[400px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="text-[16px] py-[17px] px-[15px] border border-[#ececec] rounded-[12px] w-full"
              />

              <div className="absolute right-0 mt-5 mr-[10px] text-[#aeaeae]">
                <IoSearch size={20} />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between w-full mt-5">
            <div className="flex flex-col gap-5 flex-[1_1]">
              <p>
                {" "}
                <span className="text-[#b9b9b9] text-[14px]">
                  14 / 01 / 2022
                </span>
                <a href="/dashboard"> • {highlightedPost?.author?.name}</a>
              </p>

              <h2 className="text-4xl font-medium">{highlightedPost?.title}</h2>
              <p className="text-xl">{highlightedPost?.subtitle}</p>

              <a className="border border-black rounded-lg text-darkmuted bg-transparent py-[12px] w-[190px] text-center" href={`/blog/${highlightedPost?.slug}`}>
                Read more
              </a>
            </div>

            <div className="flex-[1_1] rounded-[24px] overflow-hidden">
              <img
                src={highlightedPost?.featured_image}
                alt="Featured post"
                className="w-full h-[350px] object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-5 mt-20">
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

          <PopularPosts />

          <div className="w-full grid grid-cols-3 gap-5 mt-20">
            {blogPosts.slice(3).map((post) => {
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
      </SectionWrapper>
      <Footer />
    </section>
  );
};

export default Page;
