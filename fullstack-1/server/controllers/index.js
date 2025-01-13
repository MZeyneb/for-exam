const modelWine = require("../models/index")

const getAllData= async (req, res) => {
    const wines = await modelWine.find()
    res.send(wines)
  }

  

const getProductById = async(req, res)=>{
    const id = req.params.id
    const product = await modelProduct.findById(id)
}

const deleteProduct =  async (req, res) => {
    const id = req.params.id
    const deleted = modelProduct.findByIdAndDelete(id)

}

const post =  async (req, res) => {
    const newProduct = modelProduct({ ...req.body });
    await newProduct.save();

}   
  

  module.exports = {
    getAllData,
    post,
    deleteProduct,
    getProductById
  }