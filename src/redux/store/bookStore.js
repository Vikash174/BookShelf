import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookSlice";

export const bookStore = configureStore({
  reducer: {
    books: bookReducer,
  },
});
