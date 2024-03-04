import Axios from "axios"
import { MdDelete } from "react-icons/md"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const PhotoItem = ({ photo, fecthData }) => {
    const deleteItem = async () => {
        const { dataDelete } = await Axios.delete("http://localhost:1234/api/photos", { data: { id: photo._id } })
        fecthData()
        console.log(dataDelete);
    }
    return <div className="photo">
        <img src={`http://localhost:1234${photo.imageUrl}`} className="img"/>
        <div className="imgButtom">
            <div className="title">{photo.title}</div>
            <button className="deleteBtnonImg" onClick={deleteItem}><MdDelete /></button>
            <Link className="deleteBtnonImg" to={`/photos/update/${photo._id}`}><FontAwesomeIcon icon={faPen } id="fa"/></Link>
        </div>
    </div>

}
export default PhotoItem