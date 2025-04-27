import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games">All Games</Link></li>
        <li><Link to="/genres">Games by Genre</Link></li>
        <li><Link to="/users">All Users</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;