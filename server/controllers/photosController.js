const Photos=require("../models/Photos")
//create:
const createNewPhoto=async(req,res)=>{
   let {title,imageUrl}=req.body
   imageUrl=`/${imageUrl}.jpg`
   const photo=await Photos.create({title,imageUrl})
   res.json(`${photo.title} created!!`)
}
//get all:
const getAllPhotos=async(req,res)=>{
    const photos=await Photos.find().lean()
    res.json(photos)
}

//update :
const update=async(req,res)=>{
    const {id}=req.params
    let {title}=req.body
    const photo=await Photos.findById(id).exec()
    photo.title=title
    const updatePhoto=await photo.save()
    res.json(`${updatePhoto.title} updated!!`)
}

//delete
const deletePhotos=async(req,res)=>{
    const {id}=req.body
    const photo=await Photos.findById(id).exec()
    const result=await photo.deleteOne()
    res.json(`photo:${result.title} deleted.`) 
}
//get 1
const getPhtoById=async(req,res)=>{
    const {id}=req.params
    const article=await Photos.findById(id).lean()
    res.json(article)
}

module.exports={createNewPhoto,getAllPhotos,update,deletePhotos,getPhtoById}