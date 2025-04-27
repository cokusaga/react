import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all books
    axios
      .get('http://127.0.0.1:8000/api/book/')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setError("Failed to fetch books.");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (books.length === 0) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>All Books</h1>
      {books.map((book) => (
        <div className="box" key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author.first_name} {book.author.last_name}</p>
          <p>Genre: {book.genre.name}</p>
          <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllBooks;