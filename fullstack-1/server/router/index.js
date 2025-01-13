const express = require("express")

const {
    getAllData,
    post,
    deleteProduct,
    getProductById} = require("../controllers/index")

 const router = express.Router()

 router.get("/", getAllData)
 router.get("/:id", getProductById);
 router.delete("/:id", deleteProduct);
 router.post("/", post);


 module.exports = router

 