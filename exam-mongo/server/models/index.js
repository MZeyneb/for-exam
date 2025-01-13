const mongoose = require('mongoose');

app.use(express.json())

const blogSchema = new Schema({
    image: string,
    country: String,
    title: String,
    description: string
  });

const blogModel = mongoose.model("blogs", blogSchema)

module.exports = blogModel