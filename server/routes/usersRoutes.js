const express = require("express")
const router = express.Router()

const usersController=require("../controllers/usersController")

router.get("/",usersController.getAllUsers)
router.get("/:id",usersController.getUserById)
router.post("/",usersController.createNewUser)
router.delete("/",usersController.deleteUser)
router.put("/update/:id",usersController.update)

module.exports = router