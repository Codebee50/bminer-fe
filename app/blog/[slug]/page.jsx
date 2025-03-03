"use client";

import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import TopNav from "@/components/TopNav";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { TiThumbsDown, TiThumbsUp } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import PostCard from "@/components/PostCard";
import { makeAbsoluteImageUrl } from "@/constants/beroute";

const page = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const getPost = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/api/posts/${slug}/`
    );
    if (response.status == 200) {
      console.log(response.data);
      setPost(response.data);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <section>
      <TopNav />
      <SectionWrapper pad={false}>
        <div className="flex flex-row items-center gap-3 pt-6 font-medium">
          <a className="text-[#5b5b5b]" href="/">
            Home
          </a>
          <div className="bg-[#b3b3b3] w-[1px] h-[18px]"></div>
          <a className="text-darkmuted">Blog</a>
          <div className="bg-[#b3b3b3] w-[1px] h-[18px]"></div>
          <a className="text-darkmuted">Why mining</a>
        </div>

        <div className="mt-[70px]">
          <div className="flex flex-row items-center gap-3 text-[18px] text-[#b9b9b9]">
            <span className=" ">14 / 01 / 2022</span>
            <a href="/dashboard" className="text-black underline capitalize">
              • {post?.author?.user?.first_name} {post?.author?.user?.last_name}
            </a>
            <p className="text-primaryPurple">•</p>

            <div className="flex flex-row items-center">
              <IoMdStarOutline size={20} />
              <p className="">{post?.likes}</p>
            </div>

            <p className="text-primaryPurple">•</p>

            <p className="">{post?.comments?.length} Comments</p>
          </div>

          <h1 className="text-[50px] text-darkmuted font-semibold mt-4">
            {post?.title}
          </h1>

          <div className="rounded-[20px] overflow-hidden w-full h-[408px] mt-[40px]">
            <img
              className="w-full h-full object-cover object-center"
              src={post?.featured_image}
              alt=""
            />
          </div>

          <div className="w-full flex flex-row gap-[100px] mt-5">
            <div className="flex flex-col gap-5">
              <div
                className="w-full text-[16px] text-darkmuted leading-8"
                dangerouslySetInnerHTML={{ __html: post?.content || "" }}
              ></div>

              <div className="flex flex-row gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-purple300 text-white flex items-center justify-center">
                  <TiThumbsUp size={20} />
                </div>

                <div className="flex flex-row items-center gap-2 text-darkmuted opacity-50">
                  <FaRegStar />
                  <p>5</p>
                </div>

                <div className="w-[40px] h-[40px] rounded-full bg-purple300 text-white flex items-center justify-center">
                  <TiThumbsDown size={20} />
                </div>

                <div className="flex flex-row items-center gap-2 text-darkmuted opacity-50">
                  <p className="text-primaryPurple">•</p>
                  <p>0 comments</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f8f8] flex flex-col rounded-[24px] p-[25px] gap-[15px] max-w-[380px] min-w-[380px] ">
              <div className="flex flex-row gap-5 w-full">
                <img
                  src={post?.author?.profile_picture}
                  className="w-[90px] h-[90px] rounded-[12px] object-cover object-center"
                  alt=""
                />

                <div className="flex flex-col">
                  <a href="" className="text-[24px] text-darkmuted">
                    {post?.author?.user?.first_name}{" "}
                    {post?.author?.user?.last_name}{" "}
                  </a>
                  <p className="text-[14px] text-[#b9b9b9]">
                    {post?.author?.position} at {post?.author?.company}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#5b5b5b] text-[16px]">
                  {post?.author?.bio}
                </p>
              </div>

              <div className="flex flex-row items-center text-[#b9b9b9] gap-3 text-sm">
                <FaRegEye />
                <p>{post?.view_count}</p>

                <span className="text-primaryPurple">•</span>

                <p>{post?.read_time} min to read</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5 mt-[50px]">
            <p className="text-[40px] font-medium text-darkmuted">
              You may also like
            </p>

            <div className="w-full grid grid-cols-3 gap-5 justify-start items-start mt-2">
              {post?.related_posts?.map((post) => {
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

          <div className="flex flex-col mt-10">
            <p className="text-darkmuted text-[24px] font-semibold">
              Leave a comment
            </p>
            <input
              type="text"
              name=""
              className="w-full rounded-[24px] mt-5 p-[20px] min-h-[172px] border border-[#e2e2e2] bg-white"
              id=""
            />
          </div>
        </div>
      </SectionWrapper>
      <Footer />
    </section>
  );
};

export default page;
