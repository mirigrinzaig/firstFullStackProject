import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePhoto = () => {
  const { id } = useParams();
  const [photo,setPhoto]=useState({})
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOldPhoto = async () => {
      try {
        const { data: oldPhoto } = await Axios.get(`http://localhost:1234/api/photos/${id}`);
        setTitle(oldPhoto.title)
        setPhoto(oldPhoto)
        
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOldPhoto();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const { data } = await Axios.put(`http://localhost:1234/api/photos/update/${id}`, {
        title: title || photo.title,
      });
      console.log(data);
      setTitle("");
      navigate("/photos");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="addPage"> 
      {isLoading && <div>Loading post...</div>}
      {error && <div>Error fetching post: {error.message}</div>}
      {!isLoading && !error && (
         <form onSubmit={submitForm} className="updateForm">
         <div>update photo</div>
         <input value={title} placeholder="Please add title"  onChange={(e)=>{setTitle(e.target.value)}}></input>
         <button className="submit" type="submit" >save</button>
         </form>
      )}
    </div>
  );
};

export default UpdatePhoto;
