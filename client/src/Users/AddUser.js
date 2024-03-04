import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md"
import { Link } from "react-router-dom"

const AddUser = () => {
  const [details, setDetails] = useState({
    name: "",
    userName: "",
    email: "",
    address: "", // corrected typo
    phone: ""
  });
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const { data } = await Axios.post("http://localhost:1234/api/users", {
      name: details.name,
      userName: details.userName,
      email: details.email,
      adress: details.address,
      phone: details.phone
    });
    console.log(data);
    setDetails({
      name: "",
      userName: "",
      email: "",
      address: "", 
      phone: ""
    });
    navigate("/users");
  };

  const inputChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="addPage"> 
      <form onSubmit={submitForm} className="updateForm">
      <div>insert new user
      <Link className="cancel"  to={`/users`}><MdCancel></MdCancel></Link>
      </div>
        <input value={details.name} placeholder="Please add name"required={true} onChange={inputChange} name="name"></input>
        <input value={details.userName} placeholder="Please add userName" onChange={inputChange} name="userName"></input>
        <input value={details.email}placeholder="Please add email"onChange={inputChange}name="email"></input>
        <input value={details.address}placeholder="Please add address" onChange={inputChange}name="address" ></input>
        <input value={details.phone}placeholder="Please add phone" onChange={inputChange} name="phone"></input>
        <button  className="submit" disabled={details.name === ""} type="submit">
          save
        </button>
      </form>
    </div>
  );
};

export default AddUser;