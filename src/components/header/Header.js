import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faQrcode,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSearchTerm, setShowBookForm } from "../../redux/slices/bookSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const searchTerm = useSelector((state) => state.books.searchTerm);

  const dispatch = useDispatch();

  const addBookClickHandler = () => {
    dispatch(setShowBookForm(true));
  };

  const searchClickHandler = () => {};

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="flex flex-col sm:flex-row  justify-between p-5 shadow-lg items-center w-full ">
      <div>
        <h1 className="text-xl font-bold">BookShelf</h1>
      </div>

      <div className="flex items-center mt-3 md:mt-0">
        <input
          id="book_search_input_box"
          className="p-2 rounded-l-full w-full md:w-64 lg:w-96 bg-gray-200 border border-[#ffffff33]"
          type="text"
          placeholder="Search books by Name or ISBN Number"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="bg-gray-200 py-2 px-4 rounded-r-full border border-[#ffffff33] ml-2 md:ml-0"
          onClick={searchClickHandler}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className="flex items-center gap-5 hover:cursor-pointer mt-3 md:mt-0">
        <div
          className="p-2 border border-black hover:cursor-pointer"
          onClick={addBookClickHandler}
        >
          <span>Add Book </span>
          <FontAwesomeIcon className="mx-1" icon={faPlus} />
        </div>
        <div className="p-2 border border-black hover:cursor-pointer">
          <span> SCAN QR</span>
          <FontAwesomeIcon className="mx-1" icon={faQrcode} />
        </div>
      </div>
    </div>
  );
};

export default Header;
