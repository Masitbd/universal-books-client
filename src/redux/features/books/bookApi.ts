import { IBook } from "../../../types/interface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/book/${id}`,
      //providesTags: ["Book"],
    }),
    postBooks: builder.mutation({
      query: (data: IBook) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  usePostBooksMutation,
  useGetSingleBookQuery,
  useDeleteBookMutation,
} = bookApi;
