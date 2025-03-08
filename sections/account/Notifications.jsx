import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetchRequest from "@/hooks/useFetch";
import { makeApiUrl } from "@/constants/beroute";
import { toast } from "react-toastify";
import { formatDate } from "@/constants/constants";
import MTHead from "@/components/MTHead";

const Notifications = () => {
  const [notificationList, setNotificationList] = useState([]);

  const { mutate: getNotifications, isLoading } = useFetchRequest(
    makeApiUrl("/api/v1/dashboard/notifications/"),
    (response) => {
      setNotificationList(response.data.results);
    },
    (error) => {
      toast.error("Failed to get notification list");
    }
  );

  useEffect(() => {
    getNotifications();
  }, []);
  return (
    <section className="flex flex-col w-full">
      <h2 className="text-darkmuted font-semibold text-[26px]">
        Notifications
      </h2>

      <div>
        <Table className={"bg-[#fafafa] rounded-2xl p-[22px]"}>
          <TableHeader>
            <TableRow className={"p-[22px]"}>
              <MTHead className={"p-[30px]"} label={"Id"}></MTHead>
              <MTHead className={"p-[30px]"} label={"Title"}></MTHead>
              <MTHead className={"p-[30px]"} label={"Message"}></MTHead>
              <MTHead className={"p-[22px]"} label={"date"}></MTHead>
            </TableRow>
          </TableHeader>
          <TableBody className={"bg-[#fafafa] p-[22px]"}>
            {notificationList?.map((notification, index) => (
              <TableRow key={index}>
                <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                  #{notification.id}
                </TableCell>
                <TableCell className="text-[#8e61bf] text-[20px] font-semibold">
                  {notification?.title}
                </TableCell>
                <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                  {notification.message}
                </TableCell>
                <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                  {formatDate(notification.created_at)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Notifications;
