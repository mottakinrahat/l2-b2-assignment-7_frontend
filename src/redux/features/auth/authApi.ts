import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    registers: builder.mutation({
      query: (userRegisterInfo) => {
        return {
          url: "/register",
          method: "POST",
          body: userRegisterInfo,
        };
      },
    }),
  }),
});
export const { useLoginMutation, useRegistersMutation } = authApi;
