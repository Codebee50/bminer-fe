import React, { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import CircleSpinner from "./CircleSpinner";

const AuthProtected = ({
  children,
  onUserLoaded = () => {},
  adminRoute = false,
}) => {
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);

  const router = useRouter();
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/sign-in?next=${pathname}`);
    }

    console.log("userinfo", userInfo);
  }, [isAuthenticated, hydrated]);

  useEffect(() => {
    if (userInfo) {
      if (adminRoute && !userInfo?.is_admin) {
        toast.error("Cannot access an admin route with a user account");
        router.push("/");
      }
    }
  }, [userInfo?.is_admin]);

  if (!hydrated) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <CircleSpinner size={50} />
      </section>
    );
  }

  return <>{children}</>;
};

export default AuthProtected;
