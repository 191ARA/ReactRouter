import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useUserReducer from '../hooks/useUserReducer';
import './Users.css';

const Users = () => {
  const { state, fetchUsers } = useUserReducer();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <div className="users">
      <h1>Users</h1>
      <ul className="user-list">
        {state.users.map((user) => (
          <li key={user.id} className="user-item">
            <Link to={`/users/${user.id}`} className="user-link">
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;