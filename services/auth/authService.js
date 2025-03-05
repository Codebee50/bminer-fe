import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_BE_URL } from "@/constants/beroute";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_BE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),

  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: "/api/v1/auth/profile/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery } = authApi;
