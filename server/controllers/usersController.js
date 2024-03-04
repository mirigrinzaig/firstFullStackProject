const Users=require("../models/Users")
//create:
const createNewUser=async(req,res)=>{
   const {name,userName,email,adress,phone}=req.body
   const user=await Users.create({name,userName,email,adress,phone})
   res.json(`${user.name} created!!`)
}
//get all:
const getAllUsers=async(req,res)=>{
    const users=await Users.find().lean()
    res.json(users)
}

//update 2:
const update=async(req,res)=>{
    const {id}=req.params
    const {name,userName,email,adress,phone}=req.body
    const user=await Users.findById(id).exec()
    user.name=name
    user.userName=userName
    user.email=email
    user.adress=adress
    user.phone=phone
    const updateUser=await user.save()
    res.json(`${updateUser.name} updated!!`)
}
//delete:
const deleteUser=async(req,res)=>{
    const {id}=req.body
    const user=await Users.findById(id).exec()
    const result=await user.deleteOne()
    res.json(`user: ${result.name} deleted.`) 
}
//get by id:
const getUserById=async(req,res)=>{
    const {id}=req.params
    const user=await Users.findById(id).lean()
    res.json(user)
}


module.exports={createNewUser,getAllUsers,update,deleteUser,getUserById}