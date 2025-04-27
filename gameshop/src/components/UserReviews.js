import React from 'react';
import { useParams, Link } from 'react-router-dom';

function UserReviews() {
  const { id } = useParams();

  // Mock data for user
  const user = { id: id, username: 'Mock User' };

  // Mock data for reviews
  const reviews = [
    { id: 1, game: { id: 101, name: 'Game 1' }, review_score: '3', review_text: 'Great game!' },
    { id: 2, game: { id: 102, name: 'Game 2' }, review_score: '2', review_text: 'It was okay.' },
  ];

  /*
    To replace the mock data with API calls:
    1. Remove lines 7-8 (the mock `user` object).
    2. Remove lines 11-15 (the mock `reviews` array).
    3. Uncomment the following code and use it to fetch data from the API:

    const [user, setUser] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/user/${id}/`)
        .then((response) => {
          setUser(response.data); // Replace mock user with API response
        });

      axios.get(`http://127.0.0.1:8000/api/review/?user=${id}`)
        .then((response) => {
          setReviews(response.data); // Replace mock reviews with API response
        });
    }, [id]);
  */

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{user.username}'s Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div className="box" key={review.id}>
            <p><strong>Game:</strong> <Link to={`/games/${review.game.id}`}>{review.game.name}</Link></p>
            <p><strong>Score:</strong> {review.review_score}</p>
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