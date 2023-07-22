import { IBook } from "../../../types/interface";
import { api } from "../../api/apiSlice";

const bookApi = api
  .enhanceEndpoints({
    addTagTypes: ["Books"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllBooks: builder.query<IBook[], void>({
        query: () => "/books",
        providesTags: ["Books"],
      }),
      postBooks: builder.mutation({
        query: (data) => ({
          url: "/book",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Books"],
      }),
    }),
  });

export const { useGetAllBooksQuery, usePostBooksMutation } = bookApi;
