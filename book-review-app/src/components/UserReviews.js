import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function UserReviews() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch user details
    axios.get(`http://127.0.0.1:8000/api/user/${id}/`).then((response) => {
      setUser(response.data);
    });

    // Fetch user reviews
    axios.get(`http://127.0.0.1:8000/api/review/?user=${id}`).then((response) => {
      setReviews(response.data);
    });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{user.username}'s Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div className="box" key={review.id}>
            <p>
              <strong>Book:</strong>{" "}
              <Link to={`/books/${review.book.id}`}>{review.book.title}</Link>
            </p>
            <p>
              <strong>Score:</strong> {review.review_score}
            </p>
            <p>{review.review_text}</p>
          </div>
        ))
      ) : (
        <p>No reviews found for this user.</p>
      )}
    </div>
  );
}

export default UserReviews;