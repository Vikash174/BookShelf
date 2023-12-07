import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addBook, setShowBookForm } from "../../../redux/slices/bookSlice";
import validateInputs from "../../../utils/validateInputs";

const AddBookForm = () => {
  const dispatch = useDispatch();
  const currentEditingBook = useSelector(
    (state) => state.books.currentBookForEditing
  );

  const bookName = useRef(null);
  const ISBN_No = useRef(null);
  const bookCategory = useRef(null);
  const bookRowNo = useRef(null);
  const bookCount = useRef(null);
  const bookCost = useRef(null);
  const bookAvailbility = useRef(null);

  const bookAvailbilityBoolean = bookAvailbility === "Available" ? true : false;

  const addBookClickHandler = () => {
    // validate the inputs
    // then add to the book store

    const book = {
      name: bookName.current.value,
      isbn: ISBN_No.current.value,
      category: bookCategory.current.value,
      rowNo: bookRowNo.current.value,
      count: bookCount.current.value,
      cost: bookCost.current.value,
      isAvailable: true,
    };

    const validationErrors = validateInputs(book);

    if (validationErrors.length !== 0) {
      console.log(validationErrors);
      alert("Validation errors:", validationErrors);
    }

    dispatch(addBook(book));
  };

  const closeClickHandler = () => {
    dispatch(setShowBookForm(false));
  };

  console.log(currentEditingBook?.name);

  return (
    <div className="w-[70vw] flex mt-28  flex-col">
      <div className="p-2 font-semibold my-3 flex justify-between items-center">
        <span> Add Book to the Shelf</span>
        <div
          className=" my-3 text-xl hover:cursor-pointer"
          onClick={closeClickHandler}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <label className="flex justify-between p-2">
            Book Name:
            <input
              ref={bookName}
              defaultValue={currentEditingBook?.name}
              className="border border-black"
              type="text"
            />
          </label>
          <label className="flex justify-between p-2">
            Book ISBN No.
            <input
              ref={ISBN_No}
              defaultValue={currentEditingBook?.isbn}
              className="border border-black"
              type="text"
            />
          </label>
          <label className="flex justify-between p-2">
            Book Category
            <input
              ref={bookCategory}
              className="border border-black"
              type="text"
              defaultValue={currentEditingBook?.category}
            />
          </label>
          <label className="flex justify-between p-2">
            Book Row No.
            <input
              ref={bookRowNo}
              className="border border-black"
              type="text"
              defaultValue={currentEditingBook?.rowNo}
            />
          </label>
          <label className="flex justify-between p-2">
            Book Count
            <input
              ref={bookCount}
              className="border border-black"
              type="text"
              defaultValue={currentEditingBook?.count}
            />
          </label>
          <label className="flex justify-between p-2">
            Book Cost
            <input
              ref={bookCost}
              className="border border-black"
              type="text"
              defaultValue={currentEditingBook?.cost}
            />
          </label>
          <label className="flex justify-between p-2">
            Book Availbility
            <select
              ref={bookAvailbility}
              className="border border-black"
              defaultValue={currentEditingBook?.isAvailable}
            >
              <option value={false}> Available </option>
              <option value={false}> Unavailable </option>
            </select>
          </label>
          <button
            className="self-end p-2 border border-black m-2"
            onClick={addBookClickHandler}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
