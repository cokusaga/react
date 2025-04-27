import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all users
    axios
      .get('http://127.0.0.1:8000/api/user/')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (users.length === 0) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>All Users</h1>
      {users.map((user) => (
        <div className="box" key={user.id}>
          <h2>{user.username}</h2>
          <Link to={`/users/${user.id}/reviews`}>View Reviews</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;