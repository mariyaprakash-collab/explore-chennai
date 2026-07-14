const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  overview: String,
  tips: [String],
  location: String,
  opening: String,
});

module.exports = mongoose.model("Place", placeSchema);