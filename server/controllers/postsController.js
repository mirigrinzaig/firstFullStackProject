const Post=require("../models/Posts")

//create:
const createNewPost=async(req,res)=>{
   const {title,body}=req.body
   const post=await Post.create({title,body})
   res.json(`${post.title} created!!`)
}
//get all:
const getAllPosts=async(req,res)=>{
    const posts=await Post.find().lean()
    res.json(posts)
}

//update :
const update=async(req,res)=>{
    const {id}=req.params
    const {title,body}=req.body
    const post=await Post.findById(id).exec()
    post.title=title
    post.body=body
    const updatepost=await post.save()
    res.json(`${updatepost.title} updated!!`)
}

const deletePost=async(req,res)=>{
    const {id}=req.body
    const post=await Post.findById(id).exec()
    const result=await post.deleteOne()
    res.json(`post:${result.title} deleted.`) 
}
const getPostById=async(req,res)=>{
    const {id}=req.params
    const post=await Post.findById(id).lean()
    res.json(post)
}

module.exports={createNewPost,getAllPosts,update,deletePost,getPostById}