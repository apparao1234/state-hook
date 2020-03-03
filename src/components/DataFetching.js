import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPosts(res.data);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li keu={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
