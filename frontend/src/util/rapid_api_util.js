var axios = require("axios").default;

const API_KEY = process.env.REACT_APP_RAPID_API_KEY

var options = {
  method: 'GET',
  url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search',
  params: {keyword: 'placeholder', page: '1', country: 'US', category: 'aps'},
  headers: {
    'x-rapidapi-key': `${API_KEY}`,
    'x-rapidapi-host': 'amazon-product-reviews-keywords.p.rapidapi.com'
  }
};

export const productReq = (category) => {
    options.params.keyword = category
    return axios.request(options)
}

