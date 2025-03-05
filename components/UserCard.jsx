import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import RightSider from "./RightSider";

const UserCard = ({ mobile = false }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="w-full rounded-lg px-3 py-5 flex flex-row items-center justify-between bg-darkmuted gap-4">
      <div className="w-full flex flex-row items-center gap-4">
        <div className="w-[46px] h-[46px] rounded-full bg-[#815aac] flex items-center justify-center text-white">
          <p>OU</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#c9c9c9]">Welcome</p>
          <p className="text-white">{userInfo?.full_name}</p>
        </div>
      </div>

      {mobile && (
        <Drawer>
          <DrawerTrigger>
            {" "}
            <div className="text-white">
              <AiOutlineAppstoreAdd size={35} />
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className={"hidden"}>Menu</DrawerTitle>
              <DrawerDescription className={"overflow-y-scroll no-scrollbar"}>
                <RightSider />
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default UserCard;
