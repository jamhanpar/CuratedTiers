const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const axios = require("axios").default;


// router.get("/test", (req, res) => res.json({ msg: "this is the products route"}));

router.get('/products/:category', async (req, res) => {
  // console.log(req)
  const category = req.params.category
  // console.log(category)
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
  // console.log(options)
  await axios.request(options)
    .then( response => res.send(response.data.products))
    .catch( err => res.status(500).json({ noproductfound: "No products found!"}))
});

module.exports = router;
