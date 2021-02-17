const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const axios = require("axios").default;

router.get('/products/:category', async (req, res) => {
  const category = req.params.category
  const options = {
    method: 'GET',
    url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search',
    params: {keyword: 'placeholder', page: '1', country: 'US', category: 'aps'},
    headers: {
      'x-rapidapi-key': `${keys.rapidAPIKey}`,
      'x-rapidapi-host': 'amazon-product-reviews-keywords.p.rapidapi.com'
    }
  };
  options.params.keyword = category;
  await axios.request(options)
    .then( response => res.send(response.data.products))
    .catch( err => res.status(503).json({ pleasetryagain: "Please try again in 5 seconds"}));
});

module.exports = router;
