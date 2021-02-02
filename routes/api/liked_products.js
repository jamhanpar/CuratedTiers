const express = require('express');
const router = express.Router();
const passport = require('passport');

const LikedProduct = require('../../models/LikedProduct');

router.get('/user/:user_id', (req, res) => {
  LikedProduct.find({ user: req.params.user_id})
    .sort({ score: -1 })
    .then(likedProducts => res.json(likedProducts))
    .catch(err => res.status(404).json({ nolikedproductsfound: "Nothing here!"}));
});

router.get('/:id', (req, res) => {
  LikedProduct.findById(req.params.id)
    .then(likedProduct => res.json(likedProduct))
    .catch( err => res.status(404).json({ nolikedproductfound: "No product found!"}));
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const newLikedProduct = new LikedProduct({
    user: req.user.id,
    asin: req.body.asin,
    price: {
      beforePrice: req.body.price.beforePrice,
      currentPrice: req.body.price.currentPrice,
      savingsAmount: req.body.price.savingsAmount,
      savingsPercent: req.body.price.savingsPercent
    },
    reviews: {
      rating: req.body.reviews.rating,
      totalReviews: req.body.reviews.totalReviews
    },
    score: req.body.score,
    thumbnail: req.body.thumbnail,
    title: req.body.title,
    url: req.body.url
  });

  newLikedProduct.save().then(likedProduct => res.json(likedProduct))
})


module.exports = router;
