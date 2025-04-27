import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BooksByGenre() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch all genres
    axios.get('http://127.0.0.1:8000/api/genre/').then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      // Fetch books for the selected genre
      axios.get(`http://127.0.0.1:8000/api/book/?genre=${selectedGenre}`).then((response) => {
        setBooks(response.data);
      });
    }
  }, [selectedGenre]);

  return (
    <div className="container">
      <h1>Books by Genre</h1>
      {selectedGenre === '' ? (
        <div>
          <h2>Select a Genre</h2>
          <div className="box-container">
            {genres.map((genre) => (
              <div
                className="box"
                key={genre.id}
                onClick={() => setSelectedGenre(genre.name)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{genre.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Books in {selectedGenre}</h2>
          <button onClick={() => setSelectedGenre('')} style={{ marginBottom: '20px' }}>
            Back to Genres
          </button>
          <div className="box-container">
            {books.map((book) => (
              <div className="box" key={book.id}>
                <h3>{book.title}</h3>
                <p>Author: {book.author.first_name} {book.author.last_name}</p>
                <Link to={`/books/${book.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BooksByGenre;