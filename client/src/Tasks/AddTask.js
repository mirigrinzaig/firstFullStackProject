import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { MdCancel } from "react-icons/md"
import { Link } from "react-router-dom"

const AddTask=()=>{
    const[title,setTitle]=useState("")
    const navigate=useNavigate()

    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}=await Axios.post("http://localhost:1234/api/todos",{title})
        console.log(data);
        setTitle("")
        navigate('/tasks')
    }
    return <div className="addPage"> 
    <form onSubmit={submitForm} className="updateForm">
    <div>create new task
    <Link className="cancel"  to={`/tasks`}><MdCancel></MdCancel></Link>
    </div>
    <input value={title} placeholder="Please add title" required={true} onChange={(e)=>{setTitle(e.target.value)}}></input>
    <button  disabled={title===''} type="submit" className="submit">save</button>
    </form>
    
    </div>
}
export default AddTask