import { IBook } from "../../../types/interface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    getBook: builder.query({
      query: (id: string) => `book/${id}`,
      providesTags: ["Book"],
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
    updateBook: builder.mutation({
      query: ({ data, id }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books", "Book"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  usePostBooksMutation,
  useDeleteBookMutation,
  useGetBookQuery,
  useUpdateBookMutation,
} = bookApi;
