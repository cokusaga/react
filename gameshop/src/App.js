import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GameDetails from './components/GameDetails';
import GamesByGenre from './components/GamesByGenre';
import UserReviews from './components/UserReviews';
import UserList from './components/UserList';
import AllGames from './components/AllGames'; // Import AllGames component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<AllGames />} /> {/* Add this route */}
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/genres" element={<GamesByGenre />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id/reviews" element={<UserReviews />} />
      </Routes>
    </Router>
  );
}

export default App;