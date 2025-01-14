const mongoose = require('mongoose');

const { Schema } = mongoose;
const blogSchema = new Schema({
    image: String,
    country: String,
    title: String,
    description: String
  });

const blogModel = mongoose.model("blogs", blogSchema)

module.exports = blogModel