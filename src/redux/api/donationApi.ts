import { baseApi } from "./baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonation: builder.query({
      query: () => ({
        url: "/donation",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
    postDonation: builder.mutation({
      query: (data) => {
        return {
          url: "/donation",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["donation"],
    }),
  }),
});
export const { useGetDonationQuery, usePostDonationMutation } = donationApi;
