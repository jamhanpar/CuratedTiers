import axios from 'axios';

export const getLikedProducts = user_id => (
  axios.get(`/api/liked_products/user/${user_id}`)
);

export const getLikedProduct = id => (
  axios.get(`/api/liked_products/${id}`)
);

export const addLikedProduct = data => (
  axios.post('/api/liked_products', data)
);

export const updateLikedProduct = data => (
  axios.patch(`/api/liked_products/${data.id}`, data)
)

export const destroyLikedProduct = id => (
  axios.delete(`/api/liked_products/${id}`)
);