const Todo=require("../models/Todos")
//create:
const createNewTask=async(req,res)=>{
   const {title,complete,tags}=req.body
   const task=await Todo.create({title,complete,tags})
   res.json(`${task.title} created!!`)
}
//get all:
const getAllTasks=async(req,res)=>{
    const tasks=await Todo.find().lean()
    res.json(tasks)
}

//update 
const update=async(req,res)=>{
    const{id}=req.params
    const {title,tags}=req.body
    const task=await Todo.findById(id).exec()
    task.title=title
    task.tags=tags
    const updateTask=await task.save()
    res.json(`${updateTask.title} updated!!`)
}
//delete:
const deleteTask=async(req,res)=>{
    const {id}=req.body
    const task=await Todo.findById(id).exec()
    const result=await task.deleteOne()
    res.json(`task:${result.title} deleted.`) 
}
//get by id:
const getTaskById=async(req,res)=>{
    const {id}=req.params
    const task=await Todo.findById(id).lean()
    res.json(task)
}
//update-completed:
const updateTaskComplete=async(req,res)=>{
    const id = req.params.id;
    const task=await Todo.findById(id).exec()
    if(task.completed!=null){
        task.completed=!task.completed
    } 
    const updateTask=await task.save()
    res.json(`${updateTask.name} updated!!`)
}




module.exports={createNewTask,getAllTasks,update,deleteTask,getTaskById,updateTaskComplete}