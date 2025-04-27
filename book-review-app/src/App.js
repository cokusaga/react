import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
import BooksByGenre from './components/BooksByGenre';
import UserReviews from './components/UserReviews';
import HomePage from './components/HomePage';
import AllBooks from './components/AllBooks';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/genres" element={<BooksByGenre />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id/reviews" element={<UserReviews />} />
        <Route path="/books" element={<AllBooks />} />
      </Routes>
    </Router>
  );
}

export default App;