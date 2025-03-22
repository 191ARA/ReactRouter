import { useReducer, useCallback } from 'react';
import axios from 'axios';

const initialState = {
  users: [],
  userDetails: {},
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.payload };
    case 'FETCH_USERS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'FETCH_USER_DETAILS_SUCCESS':
      return { ...state, loading: false, userDetails: action.payload };
    default:
      return state;
  }
};

const useUserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = useCallback(async () => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
    try {
      const response = await axios.get('https://reqres.in/api/users');
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data.data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  }, []);

  const fetchUserDetails = useCallback(async (id) => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      dispatch({ type: 'FETCH_USER_DETAILS_SUCCESS', payload: response.data.data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  }, []);

  return { state, fetchUsers, fetchUserDetails };
};

export default useUserReducer;