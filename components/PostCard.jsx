import React from "react";
import { FaRegEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BASE_BE_URL } from "@/constants/beroute";

const PostCard = ({
  title,
  author_name,
  view_count,
  slug,
  read_time,
  featured_image,
}) => {
  const router = useRouter();
  const handleCardClicked = () => {
    router.push(`/blog/${slug}`);
  };
  return (
    <div
      key={title}
      className="w-full flex flex-col gap-3 cursor-pointer"
      href={`/blog/${slug}`}
      onClick={handleCardClicked}
    >
      <img
        className="w-full h-[204px] rounded-lg object-cover object-center"
        src={featured_image}
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
