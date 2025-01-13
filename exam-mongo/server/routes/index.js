const express = require("express")
const {
    getAllBlogs,
    deleteBlog,
    getBlogById,
    postBlog
} = require("../controllers/index")

const router = express.Router()

router.get("/", getAllBlogs)
router.get("/:id", getBlogById)
router.delete("/:id", deleteBlog)
router.post("/", postBlog)

module.exports = router