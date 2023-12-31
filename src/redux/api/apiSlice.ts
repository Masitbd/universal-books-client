import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  //baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-vault-server.vercel.app",
  }),
  tagTypes: ["Books", "Book", "Reviews", "Wishlist", "Booklist"],
  endpoints: () => ({}),
});
