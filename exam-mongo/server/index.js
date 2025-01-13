const express = require('express')
const mongoose = require('mongoose');
const router = require("./routes/index")
const dotenv = require("dotenv")
const port = 3000

dotenv.config();
const app = express()
const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/blogs", router)




mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });