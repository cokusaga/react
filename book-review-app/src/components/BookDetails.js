import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/book/${id}/`).then((response) => {
      setBook(response.data);
    });
    axios.get(`http://127.0.0.1:8000/api/review/?book=${id}`).then((response) => {
      setReviews(response.data);
    });
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author.first_name} {book.author.last_name}</p>
      <p><strong>Genre:</strong> {book.genre.name}</p>
      <p><strong>Synopsis:</strong> {book.synopsis}</p>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p><strong>Score:</strong> {review.review_score}</p>
          <p>{review.review_text}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;