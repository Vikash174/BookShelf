import { useSelector } from "react-redux";
import AddBookForm from "./body/add_book/AddBookForm";

import Header from "./header/Header";
import BookContainer from "./body/books_container/BookContainer";
import DeleteWarning from "./body/books_container/DeleteWarning";

function App() {
  const showBookForm = useSelector((state) => state.books.showBookForm);
  const showDeletewarning = useSelector(
    (state) => state.books.showDeletWarning
  );

  return (
    <div className="flex flex-col items-center">
      <Header />
      {showBookForm && <AddBookForm />}
      {!showBookForm && <BookContainer />}
      {showDeletewarning && <DeleteWarning />}
    </div>
  );
}

export default App;
