import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { MdCancel } from "react-icons/md"

const AddPost=()=>{
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const navigate=useNavigate()

    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}=await Axios.post("http://localhost:1234/api/posts",{title,body})
        console.log(data);
        setTitle("")
        setBody("")
        navigate('/posts')
    }
    return <div className="addPage">  
    <form onSubmit={submitForm} className="updateForm">
    <div>create new post
    <Link className="cancel"  to={`/posts`}><MdCancel></MdCancel></Link>
    </div>
    <input value={title} placeholder="Please add title" required={true} onChange={(e)=>{setTitle(e.target.value)}}></input>
    <input  value={body} placeholder="Please add body" required={true} onChange={(e)=>{setBody(e.target.value)}}></input>
    <button  className="submit" disabled={title===''} type="submit">save</button>
    </form>
    
    </div>
}
export default AddPost