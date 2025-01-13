const express = require('express')
const mongoose = require('mongoose');
const router = require('./router');
const app = express()

require('dotenv').config()
app.use(express.json())

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 3000

app.use("/wines", router)

mongoose.connect(DB_URL)
.then(() => {
    
    console.log('Connected!')
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })

});