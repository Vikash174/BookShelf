import React from "react";

const AddBookForm = () => {
  return (
    <div className="w-[70vw] flex mt-28  flex-col">
      <div className="p-2 font-semibold my-3">
        <span> Add Book to the Shelf</span>
      </div>

      <div>
        <form className="flex flex-col">
          <label className="flex justify-between p-2">
            Book Name:
            <input className="border border-black" type="text" />
          </label>
          <label className="flex justify-between p-2">
            Book ISBN No.
            <input className="border border-black" type="text" />
          </label>
          <label className="flex justify-between p-2">
            Book Category
            <input className="border border-black" type="text" />
          </label>
          <label className="flex justify-between p-2">
            Book Row No.
            <input className="border border-black" type="text" />
          </label>
          <label className="flex justify-between p-2">
            Book Count
            <input className="border border-black" type="text" />
          </label>
          <label className="flex justify-between p-2">
            Book Cost
            <input className="border border-black" type="text" />
          </label>
          <label className="flex justify-between p-2">
            Book Availbility
            <input className="border border-black" type="text" />
          </label>
          <button className="self-end p-2 border border-black m-2 ">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
