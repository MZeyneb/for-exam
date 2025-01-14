const mongoose = require('mongoose');
<<<<<<< HEAD
const { Schema } = mongoose;

=======

const { Schema } = mongoose;
>>>>>>> 260dd79da32987ffd1731c3c6b7c80e9079c55f9
const blogSchema = new Schema({
    image: String,
    country: String,
    title: String,
    description: String
  });

const blogModel = mongoose.model("Blogs", blogSchema)

module.exports = blogModel