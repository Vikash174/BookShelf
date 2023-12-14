import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  showBookForm: false,
  showDeletWarning: false,
  showInputErrors: false,
  inputErrorMsg: "",
  currentBookForEditing: null,
  currentBookForDeleting: null,
  searchTerm: "",
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deletBookByNameOrIsbn: (state, action) => {
      let arr = state.books.filter((book) => book.name !== action.payload.name);

      state.books = arr;
    },
    setShowBookForm: (state, action) => {
      state.showBookForm = action.payload;
    },
    addBookForEditing: (state, action) => {
      state.currentBookForEditing = action.payload;
    },
    addBookForDeleting: (state, action) => {
      state.currentBookForDeleting = action.payload;
    },
    setShowDeleteWarning: (state, action) => {
      state.showDeletWarning = action.payload;
    },
    setInputErrorMsg: (state, action) => {
      state.showInputErrors = action.payload;
    },
    updateInputErrorMsg: (state, action) => {
      state.inputErrorMsg = action.payload;
    },
    updateBooksArray: (state, action) => {
      state.books = action;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addBook,
  deletBookByNameOrIsbn,
  setShowBookForm,
  addBookForEditing,
  addBookForDeleting,
  setShowDeleteWarning,
  updateBooksArray,
  setSearchTerm,
  setInputErrorMsg,
  updateInputErrorMsg,
} = bookSlice.actions;
export default bookSlice.reducer;
