import { baseApi } from "@/redux/api/baseApi";

const donorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonor: builder.query({
      query: () => ({
        url: "/donor",
        method: "GET",
      }),
      providesTags: ["donor"],
    }),
    postDonor: builder.mutation({
      query: (data) => {
        return {
          url: "/donor",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["donor"],
    }),
  }),
});
export const { useGetAllDonorQuery, usePostDonorMutation } = donorApi;
