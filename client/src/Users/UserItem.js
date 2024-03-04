import Axios from "axios"
import { MdDelete } from "react-icons/md"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const UserItem = ({ user, fecthData }) => {
    const deleteItem = async () => {
        const { dataDelete } = await Axios.delete("http://localhost:1234/api/users", { data: { id: user._id } })
        fecthData()
        console.log(dataDelete);
    }
 
    return <div className="task" >
        <div className="time">{user.createdAt}</div>
        <div>name: {user.name}</div>
        <div>id: {user._id}</div>
        <div>user name: {user.userName}</div>
        <div>email: {user.email}</div>
        <div>adress: {user.adress}</div>
        <div>user phone: {user.phone}</div>
        <button className="deleteBtn" onClick={deleteItem}><MdDelete /></button>
        <Link className="deleteBtn" to={`/users/update/${user._id}`}><FontAwesomeIcon icon={faPen } id="fa"/></Link>
       
    </div>
}
export default UserItem