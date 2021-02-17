const axios = require("axios").default;


export const productRequest = ( async category => {
  const api_url = `/api/rapids/products/${category}`;
  const data = await axios.get(api_url);
  return data;
})