import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user,setUser]=useState({})
  const [details, setDetails] = useState({
    name: "",
    userName: "",
    email: "",
    adress: "", 
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOldUser = async () => {
      try {
        console.log(id);
        const { data: oldUser } = await Axios.get(`http://localhost:1234/api/users/${id}`);
        setUser(oldUser);
        setDetails({
            name: oldUser.name,
            userName: oldUser.userName,
            email:oldUser.email,
            adress:oldUser.adress, 
            phone: oldUser.phone
          });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchOldUser();
  }, [id]);


  const submitForm = async (e) => {
    e.preventDefault();
    console.log("submit......");
    try {
      const { data } = await Axios.put(`http://localhost:1234/api/users/update/${id}`, {
        name: details.name||user.name,
        userName: details.userName||user.userName,
        email: details.email||user.email,
        adress: details.adress||user.adress,
        phone: details.phone||user.phone
      });
      console.log(data);
      setDetails({
        name: "",
        userName: "",
        email: "",
        adress: "", 
        phone: ""
      });
      navigate("/users");
    } catch (error) {
      setError(error);
    }
  };
  const inputChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="addPage"> 
      {isLoading && <div>Loading user...</div>}
      {error && <div>Error fetching user: {error.message}</div>}
      {!isLoading && !error && (
         <form onSubmit={submitForm} className="updateForm">
         <div>update user's details</div>
           <input value={details.name} placeholder="Please add name" onChange={inputChange} name="name"></input>
           <input value={details.userName} placeholder="Please add userName" onChange={inputChange} name="userName"></input>
           <input value={details.email}placeholder="Please add email"onChange={inputChange}name="email"></input>
           <input value={details.adress}placeholder="Please add address" onChange={inputChange}name="adress" ></input>
           <input value={details.phone}placeholder="Please add phone" onChange={inputChange} name="phone"></input>
           <button className="submit"  type="submit">
             save
           </button>
         </form>
      )}
    </div>
  );
};

export default UpdateUser;
