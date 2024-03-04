import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MdAddAPhoto} from "react-icons/md";
import Axios from "axios"
import PhotoItem from "./PhotoItem"

const PhotosList = () => {
    const [photos, setPhotos] = useState([])

    const fecthData = async () => {
        const { data } = await Axios.get("http://localhost:1234/api/photos")
        setPhotos(data)
    }
    useEffect(() => {
        fecthData()
    }, [])

    if (photos.length === 0) return( <div className="empty">
    <h1>no pictures here</h1>
    <Link to='/photos/add'>< MdAddAPhoto className="add" />add a picture</Link>
    </div>)
  
    return <div className="tasksList">
        <Link to='/photos/add'>< MdAddAPhoto className="add" />add a picture</Link>
        <div className="photos">
            {photos.map((photo) => {
                return <PhotoItem photo={photo} fecthData={fecthData} />
            })}
        </div>
    </div>
}
export default PhotosList