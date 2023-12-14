import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletBookByNameOrIsbn,
  setShowDeleteWarning,
} from "../../../redux/slices/bookSlice";

const DeleteWarning = () => {
  const dispatch = useDispatch();

  const currentBookForDeleting = useSelector(
    (state) => state.books.currentBookForDeleting
  );

  const yesClickHandler = () => {
    dispatch(deletBookByNameOrIsbn(currentBookForDeleting));
    dispatch(setShowDeleteWarning(false));
  };

  const noClickHandler = () => {
    dispatch(setShowDeleteWarning(false));
  };

  return (
    <div className="fixed top-[45%] p-4 bg-slate-200">
      <div>
        <h2 className="text-xl font-semibold">
          All the books with this name will be deleted. Are you sure to delete
          the book
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
