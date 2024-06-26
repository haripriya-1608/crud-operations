import config from "../../config.json";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";
import { useParams, useNavigate } from "react-router-dom";
const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (id === "new") return;
    const fetchPost = async () => {
      const res = await axios.get(`https://crud-operations-5oo4.onrender.com/${id}`);
      setPost(res.data);
    };
    fetchPost();
  }, []);

  const handleChange = (e) => {
    const postClone = { ...post };
    postClone[e.target.name] = e.target.value;
    setPost(postClone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === "new") {
      await axios.post("https://crud-operations-5oo4.onrender.com/post-data", post);
      return navigate("/");
    } else {
      await axios.put(`https://crud-operations-5oo4.onrender.com/${id}`, post);
      return navigate("/");
    }
  };

  return (
    <div className="post__wrapper">
      <div className="container">
        <form className="post">
          <input
            type="text"
            placeholder="Title..."
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Content..."
            name="content"
            value={post.content}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn btn-blue">
            {id === "new" ? "Post" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
