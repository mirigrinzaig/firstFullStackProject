import Axios from "axios"
import { MdDelete } from "react-icons/md"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const TaskItem = ({ post,fetchData}) => {
    const deleteItem = async () => {
        const {dataDelete} = await Axios.delete("http://localhost:1234/api/posts", { data:{id: post._id } })
        fetchData()
        console.log(dataDelete);
    }

    return <div className="task">
        <div className="time">{post.createdAt}</div>
        <div>title: "{post.title}"</div>
        <div>id: {post._id}</div>
        <div>body: {post.body}</div>
        <Link className="deleteBtn" to={`/posts/update/${post._id}`}><FontAwesomeIcon icon={faPen } id="fa"/></Link>
        <button className="deleteBtn" onClick={deleteItem}><MdDelete /></button>
    </div>

}
export default TaskItem