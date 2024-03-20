import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2-b2-assignment7-rahat.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: ["clothes", "donation", "comments", "donor", "volunteer"],
  endpoints: () => ({}),
});
