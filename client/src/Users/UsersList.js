import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Axios from "axios";
import UserItem from "./UserItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("id");

  const fecthData = async () => {
    const { data } = await Axios.get("http://localhost:1234/api/users");
    setUsers(data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredUsers = users.filter((user) => {
        if (filterBy === "id") {
          return user._id.toLocaleString().includes(searchQuery);
        } else {
          return user[filterBy].toLowerCase().includes(searchQuery.toLowerCase());
        }
      });
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers(users);
    }
  }, [users, searchQuery, filterBy]);

  const searchBoxChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (users.length === 0) return (<div className="empty">
    <h1>no users here</h1>
    <Link to='/users/add'>
      <FontAwesomeIcon icon={faUserPlus} className="add" />add user
    </Link>
  </div>)

  return (
    <>
      <div className="tasksList">
        <div className="top">
          <Link to='/users/add'>
            <FontAwesomeIcon icon={faUserPlus} className="add" />
          </Link>
          <select onChange={(e) => setFilterBy(e.target.value)}>
            <option value={'id'}>id</option>
            <option value={'name'}>name</option>
            <option value={'email'}>email</option>
            <option value={'phone'}>phone number</option>
            <option value={'userName'}>user name</option>
          </select>
          <input className="searchBox" placeholder="search in" onChange={searchBoxChange}></input></div>
        {filteredUsers.map((user) => {
          return <UserItem user={user} fecthData={fecthData} />
        })}
      </div>
    </>
  );
};

export default UsersList;
