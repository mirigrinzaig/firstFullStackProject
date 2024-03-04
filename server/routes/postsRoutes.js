const express = require("express")
const router = express.Router()

const postsController=require("../controllers/postsController")

router.get("/",postsController.getAllPosts)
router.get("/:id",postsController.getPostById)
router.post("/",postsController.createNewPost)
router.delete("/",postsController.deletePost)
router.put('/update/:id',postsController.update)



module.exports = router