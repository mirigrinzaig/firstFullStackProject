import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { MdCancel } from "react-icons/md"
import { Link } from "react-router-dom"

const AddPhoto=()=>{
    const[title,setTitle]=useState("")
    const[imageUrl,setImageUrl]=useState("")
    const navigate=useNavigate()

    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}=await Axios.post("http://localhost:1234/api/photos",{title,imageUrl})
        setTitle("")
        setImageUrl("")
        navigate('/photos')
        console.log(data);
    }
    return <div className="addPage">  
    <form onSubmit={submitForm} className="updateForm">
    <div>create new photo
    <Link className="cancel"  to={`/photos`}><MdCancel></MdCancel></Link>
    </div>
    <input value={title} placeholder="Please add title" required={true} onChange={(e)=>{setTitle(e.target.value)}}></input>
    <input value={imageUrl} placeholder="Please add url" required={true} onChange={(e)=>{setImageUrl(e.target.value)}}></input>
    <button onSubmit={submitForm} className="submit" disabled={title===''||imageUrl===''} type="submit">save</button>
    </form>
    
    </div>
}
export default AddPhoto