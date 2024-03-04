import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAdd} from "react-icons/md";
import Axios from "axios";
import PostItem from "./PostItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const { data } = await Axios.get("http://localhost:1234/api/posts");
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredPosts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (posts.length === 0) return <div className="empty">
  <h1>No posts here</h1>
  <Link to="/posts/add"> <MdAdd className="add" /> add post</Link>
  </div>;

  return (
    <>
      <div className="tasksList">
      <div className="top">
        <Link to="/posts/add"> <MdAdd className="add" /></Link>
      <input className="searchBox"placeholder="For search"value={searchQuery} onChange={handleSearchInputChange} /></div>
        {filteredPosts.map((post) => (
          <PostItem post={post} fetchData={fetchData} />
        ))}
      </div>
    </>
  );
};

export default PostList;