require("dotenv").config()

const mongoose = require("mongoose")

const express = require("express")
const cors= require("cors")

const corsOptions = require("./config/corsOptions")
const connectDB=require("./config/dbConn")

const PORT = process.env.PORT || 7001
const app = express()

connectDB()
//middlewares
app.use(express.static("public"))
app.use(cors(corsOptions))
app.use(express.json())

//routes
app.use("/api/photos",require("./routes/photosRoutes"))
app.use("/api/posts",require("./routes/postsRoutes"))
app.use("/api/todos",require("./routes/todosRoutes"))
app.use("/api/users",require("./routes/usersRoutes"))

app.get("/",(req,res)=>{
res.send("this is the home page")
})

mongoose.connection.once("open",()=>{
    console.log("Connected to mogoDB")
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`) })
})

mongoose.connection.on('eror',err=>{
    console.log(err);
})

