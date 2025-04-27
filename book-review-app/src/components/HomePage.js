import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Book Review App</h1>
      <p>Explore books, genres, and user reviews!</p>
      <div className="box-container">
        <div className="box">
          <Link to="/books">Browse All Books</Link>
        </div>
        <div className="box">
          <Link to="/genres">Browse Books by Genre</Link>
        </div>
        <div className="box">
          <Link to="/users">View All Users</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;