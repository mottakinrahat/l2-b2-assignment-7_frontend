import { baseApi } from "./baseApi";

const clothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClothes: builder.query({
      query: () => ({
        url: "/clothes",
        method: "GET",
      }),
      providesTags: ["clothes"],
    }),
    addClothes: builder.mutation({
      query: (data) => {
        return {
          url: "/clothes",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["clothes"],
    }),
    updateClothes: builder.mutation({
      query: (options) => {
        return {
          url: `/clothes/${options.id}`,
          method: "PUT",
          body: options.updateClothesInfo,
        };
      },
      invalidatesTags: ["clothes"],
    }),
    deleteClothes: builder.mutation({
      query: (id) => {
        return {
          url: `/clothes/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["clothes"],
    }),
  }),
});
export const {
  useGetClothesQuery,
  useAddClothesMutation,
  useUpdateClothesMutation,
  useDeleteClothesMutation,
} = clothesApi;
