import React from 'react';
import { useParams } from 'react-router-dom';

function GameDetails() {
  const { id } = useParams();

  // Mock data for a game
  const game = {
    id: id,
    name: 'Mock Game',
    publisher: { name: 'Mock Publisher' },
    studio: { name: 'Mock Studio' },
    genre: { name: 'Action' },
    platforms: [{ name: 'PC' }, { name: 'PS5' }],
  };

  // Mock data for reviews
  const reviews = [
    { id: 1, review_score: '3', review_text: 'Great game!' },
    { id: 2, review_score: '2', review_text: 'It was okay.' },
  ];

  /*
    To replace the mock data with API calls:
    1. Remove lines 7-20 (the mock `game` object).
    2. Remove lines 23-26 (the mock `reviews` array).
    3. Uncomment the following code and use it to fetch data from the API:

    const [game, setGame] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/game/${id}/`)
        .then((response) => {
          setGame(response.data); // Replace mock game data with API response
        });

      axios.get(`http://127.0.0.1:8000/api/review/?game=${id}`)
        .then((response) => {
          setReviews(response.data); // Replace mock reviews with API response
        });
    }, [id]);
  */

  if (!game) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{game.name}</h1>
      <p><strong>Publisher:</strong> {game.publisher.name}</p>
      <p><strong>Studio:</strong> {game.studio.name}</p>
      <p><strong>Genre:</strong> {game.genre.name}</p>
      <p><strong>Platforms:</strong> {game.platforms.map((platform) => platform.name).join(', ')}</p>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div className="box" key={review.id}>
            <p><strong>Score:</strong> {review.review_score}</p>
            <p>{review.review_text}</p>
          </div>
        ))
      ) : (
        <p>No reviews found for this game.</p>
      )}
    </div>
  );
}

export default GameDetails;