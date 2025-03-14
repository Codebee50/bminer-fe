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
import { makeAbsoluteImageUrl, makeApiUrl } from "@/constants/beroute";
import BlogComment from "@/components/BlogComment";
import usePostRequest from "@/hooks/usePost";
import { toast } from "react-toastify";
import { handleGenericError } from "@/utils/errorHandler";
import { formatDate } from "@/constants/constants";
import CircleSpinner from "@/components/CircleSpinner";

const page = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [message, setMessage] = useState("")

  const getPost = async () => {
    const response = await axios.get(makeApiUrl(`/api/v1/api/posts/${slug}/`));
    if (response.status == 200) {
      console.log(response.data);
      setPost(response.data);
    }
  };

  const { mutate: likeUnlike, isLoading: isLiking } = usePostRequest(
    makeApiUrl(`/api/v1/api/posts/${post?.slug}/like/`),
    (response) => {
      toast.success(message)
      getPost();
    },
    (error) => {
      toast.error(handleGenericError(error));
    }
  );

  useEffect(() => {
    getPost();
  }, []);

  const handleLikeClick = () => {
    if (post) {
      setMessage('Blog post liked successfully')
      likeUnlike({
        likes: parseInt(post?.likes || 0) + 1,
      });
    }
  };

  const handleUnlikeClick = () => {
    if (post) {
      const likes = parseInt(post?.likes) || 0;
      setMessage("Blog post unliked successfully")
      if (likes > 0) {
        likeUnlike({
          likes: parseInt(post?.likes || 0) - 1,
        });
      }
    }
  };

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
            <span className=" ">{formatDate(post?.published_date)}</span>
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

          <div className="flex max-lg:flex-col-reverse flex-row gap-[20px] lg:gap-[100px] mt-5 w-full">
            <div className="flex flex-col gap-5">
              <div
                className="w-full max-w-[700px] text-[16px] text-darkmuted leading-8"
                dangerouslySetInnerHTML={{ __html: post?.content || "" }}
              ></div>

              <div className="flex flex-row gap-3">
                {isLiking ? (
                  <CircleSpinner />
                ) : (
                  <div
                    className="w-[40px] h-[40px] rounded-full bg-purple300 text-white flex items-center justify-center cursor-pointer"
                    onClick={handleLikeClick}
                  >
                    <TiThumbsUp size={20} />
                  </div>
                )}

                <div className="flex flex-row items-center gap-2 text-darkmuted opacity-50">
                  <FaRegStar />
                  <p>{post?.likes || 0}</p>
                </div>

                {isLiking ? (
                  <CircleSpinner />
                ) : (
                  <div
                    className="w-[40px] h-[40px] rounded-full bg-purple300 text-white flex items-center justify-center"
                    onClick={handleUnlikeClick}
                  >
                    <TiThumbsDown size={20} />
                  </div>
                )}

                <div className="flex flex-row items-center gap-2 text-darkmuted opacity-50">
                  <p className="text-primaryPurple">•</p>
                  <p>{post?.comments?.length} comments</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f8f8] h-max flex flex-col rounded-[24px] p-[25px] gap-[15px] w-full lg:max-w-[380px] min-w-[380px] ">
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

          {post?.related?.post.length > 0 && (
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
          )}

          <BlogComment post={post} />
        </div>
      </SectionWrapper>
      <Footer />
    </section>
  );
};

export default page;
