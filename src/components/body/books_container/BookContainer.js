import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const BookContainer = () => {
  const bookList = useSelector((state) => state.books.books);
  const searchTerm = useSelector((state) => state.books.searchTerm);
  const showDeletWarning = useSelector((state) => state.books.showDeletWarning);

  const filteredBooks = bookList.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm) ||
      book.isbn.toLowerCase().includes(searchTerm)
  );

  return bookList.length === 0 ? (
    <div className="mt-10 p-5 flex flex-col items-center gap-5">
      <img
        className="m-6"
        src="https://media.istockphoto.com/id/1160151100/vector/white-book-shelf-mockup-on-the-wall-3d-realistic-design-of-minimalist-bookshelf-with-blank.jpg?s=612x612&w=0&k=20&c=EZSR9mY43g2t2Sp79PI4xVLwQDOaCcJq4LnCBRZHKs4="
        alt="empty bookshelf"
      />
      <h1 className="font-semibold text-2xl text-center">
        You don't have any book in store, add book to your bookshelf
      </h1>
    </div>
  ) : (
    <>
      <div
        className={
          showDeletWarning === true
            ? "flex flex-wrap p-5 w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw] opacity-25 pointer-events-none"
            : "flex flex-wrap p-5 w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw] "
        }
      >
        {filteredBooks.map((book) => {
          return (
            <div
              key={book.name}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
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
