import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),
    postVolunteer: builder.mutation({
      query: (data) => {
        return {
          url: "/volunteer",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["volunteer"],
    }),
  }),
});
export const { useGetAllVolunteerQuery, usePostVolunteerMutation } =
  volunteerApi;
