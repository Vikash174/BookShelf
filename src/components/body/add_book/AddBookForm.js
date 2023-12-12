import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addBook,
  setInputErrorMsg,
  setShowBookForm,
  updateInputErrorMsg,
} from "../../../redux/slices/bookSlice";
import validateInputs from "../../../utils/validateInputs";

const AddBookForm = () => {
  const dispatch = useDispatch();
  const currentEditingBook = useSelector(
    (state) => state.books.currentBookForEditing
  );
  const inputErrorMsg = useSelector((state) => state.books.inputErrorMsg);
  const showInputErrors = useSelector((state) => state.books.showInputErrors);

  const bookList = useSelector((state) => state.books.books);

  const bookName = useRef(null);
  const ISBN_No = useRef(null);
  const bookCategory = useRef(null);
  const bookRowNo = useRef(null);
  const bookCount = useRef(null);
  const bookCost = useRef(null);
  const bookAvailbility = useRef(null);

  const addBookClickHandler = () => {
    const book = {
      name: bookName.current.value,
      isbn: ISBN_No.current.value,
      category: bookCategory.current.value,
      rowNo: bookRowNo.current.value,
      count: bookCount.current.value,
      cost: bookCost.current.value,
      isAvailable: bookAvailbility.current.value === "Available" ? "Yes" : "No",
    };

    const currentBook = bookList.find(
      (currBook) => book.name === currBook.name
    );

    console.log(currentBook);

    let index = bookList.findIndex((book) => book.name === currentBook.name);
    console.log(index);
    console.log(typeof bookList, bookList);
    bookList.splice(index, 1);

    console.log(bookList);

    let validationErrors = validateInputs(book).toString();

    if (validationErrors.length !== 0) {
      console.log(validationErrors);
      dispatch(updateInputErrorMsg(validationErrors));
      dispatch(setInputErrorMsg(true));
      return;
    }

    dispatch(addBook(book));
    dispatch(setShowBookForm(false));
    dispatch(setInputErrorMsg(false));
  };

  const closeClickHandler = () => {
    dispatch(setShowBookForm(false));
    dispatch(setInputErrorMsg(false));
  };

  return (
    <div className="w-[70vw] flex mt-28 flex-col shadow-2xl p-5">
      <div className="p-2 font-semibold my-3 flex justify-between items-center">
        <span className="text-sm md:text-lg"> Add Book to the Shelf</span>
        <div
          className=" my-3 text-xl hover:cursor-pointer"
          onClick={closeClickHandler}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>

      <div>
        <form
          id="book_form"
          className="flex flex-col text-sm md:text-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex justify-between py-1">
            Book Name:
            <input
              id="name_input"
              ref={bookName}
              defaultValue={currentEditingBook?.name}
              className="border border-black"
              type="text"
            />
          </label>
          <label className="flex justify-between py-1">
            Book ISBN No.
            <input
              id="isbn_input"
              ref={ISBN_No}
              defaultValue={currentEditingBook?.isbn}
              className="border border-black"
              type="text"
            />
          </label>
          <label className="flex justify-between py-1">
            Book Category
            <input
              id="category_input"
              ref={bookCategory}
              className="border border-black"
              type="text"
              defaultValue={currentEditingBook?.category}
            />
          </label>
          <label className="flex justify-between py-1">
            Book Row No.
            <input
              id="row_number_input"
              ref={bookRowNo}
              className="border border-black"
              type="text"
              defaultValue={currentEditingBook?.rowNo}
            />
          </label>
          <label className="flex justify-between py-1">
            Book Count
            <input
              id="count_input"
              ref={bookCount}
              className="border border-black"
              type="text"
              defaultValue={currentEditingBook?.count}
            />
          </label>
          <label className="flex justify-between py-1">
            Book Cost
            <input
              id="cost_input"
              ref={bookCost}
              className="border border-black"
              type="text"
              defaultValue={currentEditingBook?.cost}
            />
          </label>
          <label className="flex justify-between py-1">
            Book Availbility
            <select
              id="availbility_input"
              ref={bookAvailbility}
              className="border border-black"
              defaultValue={currentEditingBook?.isAvailable}
            >
              <option value={false}> Available </option>
              <option value={false}> Unavailable </option>
            </select>
          </label>
          {showInputErrors && (
            <p className="p-5 text-red-700 font-bold text-sm">
              ! Warning : {inputErrorMsg} !
            </p>
          )}
          <button
            className="self-end p-2 border border-black m-2 rounded-md mt-5 hover:opacity-80 font-bold"
            onClick={addBookClickHandler}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
