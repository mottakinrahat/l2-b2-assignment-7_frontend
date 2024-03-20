import { baseApi } from "./baseApi";

const clothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postClothes: builder.query({
      query: () => ({
        url: "/clothes",
        method: "POST",
      }),
    }),
  }),
});
export const { usePostClothesQuery } = clothesApi;
