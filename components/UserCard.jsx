import React from "react";
import { useSelector } from "react-redux";

const UserCard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="w-full rounded-lg px-3 py-5 flex flex-row items-center bg-darkmuted gap-4">
      <div className="w-[46px] h-[46px] rounded-full bg-[#815aac] flex items-center justify-center text-white">
        <p>OU</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[#c9c9c9]">Welcome</p>
        <p className="text-white">{userInfo?.full_name}</p>
      </div>
    </div>
  );
};

export default UserCard;
