import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  addBookForDeleting,
  addBookForEditing,
  setShowBookForm,
  setShowDeleteWarning,
} from "../../../redux/slices/bookSlice";

const BookCard = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const editClickHandler = (book) => {
    dispatch(addBookForEditing(book));
    dispatch(setShowBookForm(true));
  };
  const deleteClickHandler = (book) => {
    dispatch(addBookForDeleting(book));
    dispatch(setShowDeleteWarning(true));
  };

  return (
    <div className="border border-black p-5 rounded-lg m-2 shadow-md ">
      <div>
        <h2>
          <strong>Book Title: </strong>
          {book.name}
        </h2>
        <h2>
          <strong>ISBN Number: </strong>
          {book.isbn}
        </h2>
        <h2>
          <strong>Category: </strong>
          {book.category}
        </h2>
        <h2>
          <strong>Row Number: </strong>
          {book.rowNo}
        </h2>
        <h2>
          <strong>Count: </strong>
          {book.count}
        </h2>
        <h2>
          <strong>Cost: </strong>₹ {book.cost}
        </h2>
        <h2>
          <strong>Is Available: </strong>
          {book.isAvailable}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:justify-between mt-5">
        <button
          className="p-1 border border-black rounded-md"
          onClick={() => editClickHandler(book)}
        >
          Edit
          <FontAwesomeIcon className="mx-2" icon={faPenToSquare} />
        </button>

        <button
          className="p-1 border border-black rounded-md"
          onClick={() => deleteClickHandler(book)}
        >
          Delete
          <FontAwesomeIcon className="mx-2" icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
