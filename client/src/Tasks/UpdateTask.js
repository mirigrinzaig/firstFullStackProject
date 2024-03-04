import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const { id } = useParams();
  const [task,setTask]=useState({})
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOldPost = async () => {
      try {
        const { data: oldTask } = await Axios.get(`http://localhost:1234/api/todos/${id}`);
        setTask(oldTask)
        setTitle(oldTask.title)
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
      const { data } = await Axios.put(`http://localhost:1234/api/todos/update/${id}`, {
        title: title?title:task.title
      });
      console.log(data);
      setTitle("");
      navigate("/tasks");
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
         <div>update task</div>
         <input value={title} placeholder="Please add title"  onChange={(e)=>{setTitle(e.target.value)}}></input>
         <button className="submit" type="submit" >save</button>
         </form>
      )}
    </div>
  );
};

export default UpdateTask;
