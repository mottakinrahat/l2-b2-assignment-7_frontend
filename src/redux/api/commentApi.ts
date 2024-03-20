import { baseApi } from "./baseApi";

const commentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
      providesTags: ["comments"],
    }),
    addComments: builder.mutation({
      query: (data) => {
        return {
          url: "/comments",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["comments"],
    }),
   
  }),
});
export const {
  useGetCommentsQuery,
  useAddCommentsMutation,
 
} = commentsApi;
