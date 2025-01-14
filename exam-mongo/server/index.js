const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/index");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use("/blogs", router);

mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
