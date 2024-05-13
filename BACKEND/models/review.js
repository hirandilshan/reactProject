const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },

  review: {
    type: String,
    required: true,
  },
});

const review = mongoose.model("reviews", reviewSchema);
module.exports = review;
