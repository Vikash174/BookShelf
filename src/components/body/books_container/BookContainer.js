import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const BookContainer = () => {
  const bookList = useSelector((state) => state.books.books);
  const searchTerm = useSelector((state) => state.books.searchTerm);

  console.log(typeof bookList, bookList);

  const filteredBooks = bookList.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm) ||
      book.isbn.toLowerCase().includes(searchTerm)
  );

  return bookList.length === 0 ? (
    <h1> you don't have any book in store</h1>
  ) : (
    <>
      <div className="flex flex-wrap p-5 w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw] mx-auto">
        {filteredBooks.map((book) => {
          return (
            <div
              key={book.name}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
            >
              <BookCard book={book} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookContainer;
