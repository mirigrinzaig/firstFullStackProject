import { NavLink } from "react-router-dom"
const Navigate = () => {
    return <div className="nav">
        <NavLink to="/">home page</NavLink>
        <NavLink to="/tasks">tasks </NavLink>
        <NavLink to="/posts">posts</NavLink>
        <NavLink to="/photos">photos</NavLink>
        <NavLink to="/users">users</NavLink>
    </div>
}
export default Navigate