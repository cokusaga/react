import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Game Review App</h1>
      <p>Explore games, genres, and user reviews!</p>
      <div className="box-container">
        <div className="box">
          <Link to="/games">Browse All Games</Link>
        </div>
        <div className="box">
          <Link to="/genres">Browse Games by Genre</Link>
        </div>
        <div className="box">
          <Link to="/users">View All Users</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;