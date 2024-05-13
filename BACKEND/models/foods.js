const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const foodsSchema = new Schema({
  foodType: {
    type: String,
    required: true,
  },

  item: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

const foods = mongoose.model("foods", foodsSchema);
module.exports = foods;
