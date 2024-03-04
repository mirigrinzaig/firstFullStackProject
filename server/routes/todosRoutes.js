const express = require("express")
const router = express.Router()

const todosController=require("../controllers/todosController")

router.get("/",todosController.getAllTasks)
router.get("/:id",todosController.getTaskById)
router.post("/",todosController.createNewTask)
router.delete("/",todosController.deleteTask)
router.put("/active/:id",todosController.updateTaskComplete)
router.put('/update/:id',todosController.update)

module.exports = router