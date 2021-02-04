// import Keys from '../../config/keys';
const axios = require("axios").default;

// const options = {
//   method: 'GET',
//   url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search',
//   params: {keyword: 'placeholder', page: '1', country: 'US', category: 'aps'},
//   headers: {
//     'x-rapidapi-key': Keys.rapidAPIKey,
//     'x-rapidapi-host': 'amazon-product-reviews-keywords.p.rapidapi.com'
//   }
// };

// export const productReq = (category) => {
//     options.params.keyword = category
//     return axios.request(options)
// }

export const productRequest = ( async category => {
  const api_url = `/api/rapids/products/${category}`;
  return await axios.get(api_url);
})