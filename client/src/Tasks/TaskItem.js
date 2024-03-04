import Axios from "axios"
import { MdDelete } from "react-icons/md"
import { MdCheckBox} from "react-icons/md"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "react-router-dom";


const TaskItem = ({ task,fetchData}) => {
    const [completed, setCompleted] = useState(false)
    const deleteItem = async () => {
        const { dataDelete } = await Axios.delete("http://localhost:1234/api/todos", { data: { id: task._id } })
        fetchData()
        console.log(dataDelete);
    }
    const updateCompleted = async () => {
        const { data} = await Axios.put(`http://localhost:1234/api/todos/active/${task._id}`)
        fetchData()
        setCompleted(!completed)
        console.log(data);
    }
 

    return <div className="task" >
        <div className="time">{task.createdAt}</div>
        <div>{task.title}</div>
        <div>{task._id}</div>
        <button className="deleteBtn" onClick={updateCompleted} ><MdCheckBox style={{
            backgroundColor: task.completed ? "yellow" : "white",
        }} /></button>
        <Link className="deleteBtn" to={`/tasks/update/${task._id}`}><FontAwesomeIcon icon={faPen } id="fa"/></Link>
        <button className="deleteBtn" onClick={deleteItem}><MdDelete /></button>
    </div>

}
export default TaskItem