const express = require("express")
const router = express.Router()

const photosController=require("../controllers/photosController")

router.get("/",photosController.getAllPhotos)
router.get("/:id",photosController.getAllPhotos)
router.post("/",photosController.createNewPhoto)
router.delete("/",photosController.deletePhotos)
router.put('/update/:id',photosController.update)

module.exports = router