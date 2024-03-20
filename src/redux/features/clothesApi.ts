import { baseApi } from "../api/baseApi";

const clothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllClothes: builder.query({
      query: () => ({
        url: "/clothes",
        method: "POST",
      }),
    }),
  }),
});
export const { useGetAllClothesQuery } = clothesApi;
