import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import Axios from "axios";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchData = async () => {
        const { data } = await Axios.get("http://localhost:1234/api/todos");
        setTasks(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filteredTasks = tasks.filter((task) =>
                task.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredTasks(filteredTasks);
        } else {
            setFilteredTasks(tasks);
        }
    }, [tasks, searchQuery]);

    const searchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    if (tasks.length === 0) return( <div className="empty">
    <h1>no tasks here</h1>
    <Link to="/tasks/add"><MdAddTask className="add" />add task</Link>
    </div>)
    return (
        <div className="tasksList">
             <div className="top">
         <Link to="/tasks/add"><MdAddTask className="add" /></Link>
         <input className="searchBox" placeholder="For search" value={searchQuery}onChange={searchInputChange}/></div>
                {filteredTasks.map((task) => (
                    <TaskItem task={task} fetchData={fetchData} />
                ))}
            </div>
       
    );
};

export default TaskList;