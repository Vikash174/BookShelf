const validateInputs = (book) => {
  const errors = [];

  // Validate name
  if (!book.name || typeof book.name !== "string" || book.name.trim() === "") {
    errors.push("Name must be a non-empty string");
  }

  // Validate ISBN
  if (!book.isbn || typeof book.isbn !== "string" || book.isbn.trim() === "") {
    errors.push("ISBN must be a non-empty string");
  }

  // Validate count
  const count = parseInt(book.count, 10);
  if (isNaN(count) || count <= 0) {
    errors.push("Count must be a positive number");
  }

  return errors;
};

export default validateInputs;
