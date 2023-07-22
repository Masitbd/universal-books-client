import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/interface";

interface IBookState {
  total: number;
  books: IBook[];
}

const initialState: IBookState = {
  total: 0,
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export const {} = bookSlice.actions;
export default bookSlice.reducer;
