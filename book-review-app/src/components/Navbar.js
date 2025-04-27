import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">All Books</Link></li>
        <li><Link to="/genres">Books by Genre</Link></li>
        <li><Link to="/users">All Users</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;