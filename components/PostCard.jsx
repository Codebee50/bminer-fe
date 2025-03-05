import React from "react";
import { FaRegEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

const PostCard = ({ title, author_name, view_count, slug, read_time }) => {
  const router = useRouter()
  const handleCardClicked= ()=>{
      router.push(`/blog/${slug}`)
  }
  return (
    <div key={title} className="w-full flex flex-col gap-3" href={`/blog/${slug}`} onClick={handleCardClicked}>
      <img
        className="w-full h-[204px] rounded-lg object-cover object-center"
        src={
          "https://1bitup.com/_next/image?url=https%3A%2F%2Fapi.1bitup.com%2Fuploads%2Fblog%2Fwhat-is-ethereum.jpg&w=3840&q=75"
        }
        alt=""
      />
      <p>
        <span className="text-[#b9b9b9] text-[14px]">14 / 01 / 2022</span>
        <a href="/dashboard"> • {author_name}</a>
      </p>

      <p className="text-[24px] text-darkmuted font-semibold">{title}</p>
      <p className="">{title}</p>

      <div className="w-full flex flex-row items-center gap-3 text-[#b9b9b9]">
        <div className="flex flex-row items-center  gap-1">
          <FaRegEye />
          <p>{view_count}</p>
        </div>

        <span className="text-primaryPurple">•</span>
        <p>{read_time} min to read</p>
      </div>
    </div>
  );
};

export default PostCard;
