const blogModel = require("../models/index")

const getAllBlogs = async(req, res)=>{
    const blogs = await blogModel.find()
    res.send(blogs)
}

const getBlogById = async(req, res)=>{
    const id = req.params.id
    const blogs = await blogModel.findById(id)
}

const deleteBlog =  async (req, res) => {
    const id = req.params.id
    const deleted = await blogModel.findByIdAndDelete(id)

}

const postBlog =  async (req, res) => {
    const newBlog = blogModel({ ...req.body });
    await newBlog.save();

}

module.exports = {
    getAllBlogs,
    getBlogById,
    deleteBlog,
    postBlog
}

