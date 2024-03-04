import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams();
  const [post,setPost]=useState({})
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOldPost = async () => {
      try {
        const { data: oldPost } = await Axios.get(`http://localhost:1234/api/posts/${id}`);
        setPost(oldPost)
        setTitle(oldPost.title)
        setBody(oldPost.body)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOldPost();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const { data } = await Axios.put(`http://localhost:1234/api/posts/update/${id}`, {
        title: title || post.title,
        body: body || post.body,
      });
      console.log(data);
      setTitle("");
      setBody("");
      navigate("/posts");
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
         <div>update post</div>
         <input value={title} placeholder="Please add title"  onChange={(e)=>{setTitle(e.target.value)}}></input>
         <input  value={body} placeholder="Please add body"  onChange={(e)=>{setBody(e.target.value)}}></input>
         <button className="submit" type="submit" >save</button>
         </form>
      )}
    </div>
  );
};

export default UpdatePost;
