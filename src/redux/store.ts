import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import userReducer from "./features/user/userSlice";
import bookReducer from "./features/books/bookSlice";
import searchReducer from "./features/search/searchApi";
export const store = configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer,
    saearch: searchReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
