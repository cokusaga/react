import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  // Mock data for users
  const users = [
    { id: 1, username: 'User 1' },
    { id: 2, username: 'User 2' },
  ];

  /*
    To replace the mock data with API calls:
    1. Remove lines 6-10 (the mock `users` array).
    2. Uncomment the following code and use it to fetch data from the API:

    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/user/')
        .then((response) => {
          setUsers(response.data); // Replace mock users with API response
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);
  */

  return (
    <div className="container">
      <h1>All Users</h1>
      <div className="box-container">
        {users.map((user) => (
          <div className="box" key={user.id}>
            <h3>{user.username}</h3>
            <Link to={`/users/${user.id}/reviews`}>View Reviews</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;