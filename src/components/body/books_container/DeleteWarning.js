import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBook,
  addBookForDeleting,
  setShowDeleteWarning,
  updateBooksArray,
} from "../../../redux/slices/bookSlice";

const DeleteWarning = () => {
  const dispatch = useDispatch();
  const currentBookList = useSelector((state) => state.books.books);

  const currentBookForDeleting = useSelector(
    (state) => state.books.currentBookForDeleting
  );

  function arrayFromObject(arrayLikeObject) {
    return Array.from(arrayLikeObject);
  }

  function deleteBook(bookList, bookToDelete) {
    const resultArray = arrayFromObject(bookList);

    const updatedBookList = resultArray.filter(
      (book) => book.isbn !== bookToDelete.isbn
    );

    console.log("Deleted the object");
    return Array.from(updatedBookList);
  }

  const yesClickHandler = () => {
    dispatch(setShowDeleteWarning(false));
    dispatch(
      updateBooksArray(deleteBook(currentBookList, currentBookForDeleting))
    );
  };

  const noClickHandler = () => {
    dispatch(setShowDeleteWarning(false));
  };

  return (
    <div className="fixed top-[45%] p-4 bg-slate-200">
      <div>
        <h2 className="text-xl font-semibold">
          Are you sure to delete the book
        </h2>
      </div>
      <div>
        <button
          className="border border-white p-1 m-2 w-16 rounded-md bg-red-600 text-white font-bold"
          onClick={yesClickHandler}
        >
          Yes
        </button>
        <button
          className="border border-white p-1 m-2 w-16 rounded-md bg-green-600 text-white font-bold"
          onClick={noClickHandler}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteWarning;
