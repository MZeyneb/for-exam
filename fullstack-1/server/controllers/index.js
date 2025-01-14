const modelWine = require("../models/index")

const getAllData= async (req, res) => {
    const wines = await modelWine.find()
    res.send(wines)
  }

  

const getProductById = async(req, res)=>{
    const id = req.params.id
    const product = await modelWine.findById(id)
}

const deleteProduct =  async (req, res) => {
    const id = req.params.id
    const deleted = modelWine.findByIdAndDelete(id)

}

const post =  async (req, res) => {
    const newProduct = modelWine({ ...req.body });
    await newProduct.save();

}   
  

  module.exports = {
    getAllData,
    post,
    deleteProduct,
    getProductById
  }