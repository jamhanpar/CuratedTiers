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
  LikedProduct.findOne({user: req.body.user, asin: req.body.asin})
    .then(product => {
      if (product) {
        return res.status(400).json({ likedproduct: "Product is already liked"})
      } else {
        const newLikedProduct = new LikedProduct({
          user: req.body.user,
          asin: req.body.asin,
          currentPrice: req.body.currentPrice,
          beforePrice: req.body.beforePrice,
          savingsAmount: req.body.savingsAmount,
          savingsPercent: req.body.savingsPercent,
          rating: req.body.rating,
          totalReviews: req.body.totalReviews,
          score: req.body.score,
          thumbnail: req.body.thumbnail,
          title: req.body.title,
          url: req.body.url
        });
        
        newLikedProduct.save().then(likedProduct => res.json(likedProduct))
      }
    }
  )
});

router.patch('/:id', passport.authenticate('jwt', { session: false}), (req, res) => {
  LikedProduct.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then( likedProduct => res.send(likedProduct) )
    .catch(err => res.status(500).json({ nolikedproductfound: "No product found!"}))
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  LikedProduct.findOneAndDelete(req.params.id)
    .then( deletedProduct => res.send(deletedProduct))
    .catch( err => res.status(500).json({ nolikedproductfound: "No product found!"}))
});


module.exports = router;
