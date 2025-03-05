"use client";
import { useGetUserDetailsQuery } from "@/services/auth/authService";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCredentials, logout } from "@/features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetUserDetailsQuery("userDetails", {
    //perform refetch every 15 minutes
    pollingInterval: 900000,
  });

  useEffect(() => {
    if (data) dispatch(setCredentials(data?.email ? data : null));

    console.log("the data", data);

    if (error && (error?.status === 401 || error?.status == 403)) {
      console.log("loging use out");
      dispatch(setCredentials(null));
      dispatch(logout());
    }
  }, [data, dispatch, error]);

  return <header></header>;
};

export default Header;
