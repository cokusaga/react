import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GamesByGenre() {
  // Mock data for genres
  const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'RPG' },
  ];

  // Mock data for games
  const mockGames = {
    1: [
      { id: 101, name: 'Game 1' },
      { id: 102, name: 'Game 2' },
    ],
    2: [
      { id: 201, name: 'Game 3' },
      { id: 202, name: 'Game 4' },
    ],
    3: [
      { id: 301, name: 'Game 5' },
      { id: 302, name: 'Game 6' },
    ],
  };

  const [selectedGenre, setSelectedGenre] = useState('');
  const [games, setGames] = useState([]);

  /*
    To replace the mock data with API calls:
    1. Remove lines 6-12 (the mock `genres` array).
    2. Remove lines 15-27 (the mock `mockGames` object).
    3. Replace the `handleGenreClick` function with the following:

    const handleGenreClick = (genreId) => {
      setSelectedGenre(genreId);
      axios.get(`http://127.0.0.1:8000/api/game/?genre=${genreId}`)
        .then((response) => {
          setGames(response.data); // Replace mock games with API response
        });
    };

    4. Use the `useEffect` hook to fetch genres from the API:

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/genre/')
        .then((response) => {
          setGenres(response.data); // Replace mock genres with API response
        });
    }, []);
  */

  return (
    <div className="container">
      <h1>Games by Genre</h1>
      {selectedGenre === '' ? (
        <div>
          <h2>Select a Genre</h2>
          <div className="box-container">
            {genres.map((genre) => (
              <div
                className="box"
                key={genre.id}
                onClick={() => {
                  setSelectedGenre(genre.id);
                  setGames(mockGames[genre.id] || []);
                }}
                style={{ cursor: 'pointer' }}
              >
                <h3>{genre.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Games in {genres.find((g) => g.id === selectedGenre)?.name}</h2>
          <button onClick={() => setSelectedGenre('')} style={{ marginBottom: '20px' }}>
            Back to Genres
          </button>
          <div className="box-container">
            {games.map((game) => (
              <div className="box" key={game.id}>
                <h3>{game.name}</h3>
                <Link to={`/games/${game.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GamesByGenre;