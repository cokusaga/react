import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AllGames() {
  // Mock data for games
  const games = [
    { id: 1, name: 'Game 1', genre: 'Action' },
    { id: 2, name: 'Game 2', genre: 'Adventure' },
    { id: 3, name: 'Game 3', genre: 'RPG' },
  ];

  /*
    To replace the mock data with API calls:
    1. Remove lines 6-12 (the mock `games` array).
    2. Uncomment the following code and use it to fetch data from the API:

    const [games, setGames] = useState([]);

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/game/')
        .then((response) => {
          setGames(response.data); // Replace mock data with API response
        })
        .catch((error) => {
          console.error('Error fetching games:', error);
        });
    }, []);
  */

  return (
    <div className="container">
      <h1>All Games</h1>
      <div className="box-container">
        {games.map((game) => (
          <div className="box" key={game.id}>
            <h3>{game.name}</h3>
            <p>Genre: {game.genre}</p>
            <Link to={`/games/${game.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllGames;