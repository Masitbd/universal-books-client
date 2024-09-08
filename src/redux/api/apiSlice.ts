// apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://universal-books-server-app-1:4002",
    baseUrl: "http://localhost:4002",
  }),
  tagTypes: ["Books", "Book", "Reviews", "Wishlist", "Booklist"],
  endpoints: () => ({}),
});
