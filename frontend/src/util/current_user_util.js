import axios from 'axios';

export const getCurrentUser = () => (
  axios.get(`/api/users/current`)
);