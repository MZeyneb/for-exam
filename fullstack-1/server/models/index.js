const mongoose = require('mongoose');
const { Schema } = mongoose;

const wineSchema = new Schema({
image: String,
  title: String, 
  price: Number
});

const modelWine= mongoose.model("Wines", wineSchema)

module.exports = modelWine