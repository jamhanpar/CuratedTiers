const express = require('express');
const router = express.Router();
const passport = require('passport');

const LikedProduct = require('../../models/LikedProduct');

router.get("/test", (req, res) => res.json({ msg: "This is the liked product route" }));

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
});

router.patch('/:id', passport.authenticate('jwt', { session: false}), (req, res) => {
  LikedProduct.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then( likedProduct => res.send(likedProduct) )
    .catch(err => res.status(500).json({ nolikedproductfound: "No product found!"}))
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  LikedProduct.findByIdAndRemove(req.params.id)
    .then( () => res.json({ msg: "Successfully unliked product!"}))
    .catch( err => res.status(500).json({ nolikedproductfound: "No product found!"}))
});


module.exports = router;
