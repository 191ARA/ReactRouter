import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useUserReducer from '../hooks/useUserReducer';
import './UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const { state, fetchUserDetails } = useUserReducer();

  useEffect(() => {
    fetchUserDetails(id);
  }, [id, fetchUserDetails]);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  const user = state.userDetails;

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <div className="user-info">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="user-avatar" />
        <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserDetails;