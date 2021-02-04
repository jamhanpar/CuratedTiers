const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikedProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  asin: {
    type: String,
    required: true 
  },
  beforePrice: {
    type: Number,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  savingsAmount: {
    type: Number
  },
  savingsPercent: {
    type: Number
  },
  rating: {
    type: Number,
    required: true
  },
  totalReviews: {
    type: Number,
    required: true 
  },
  score: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = LikedProduct = mongoose.model('likedProduct', LikedProductSchema)