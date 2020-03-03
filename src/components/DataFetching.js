import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <input
        type='text'
        value={id}
        onChange={e => {
          setId(e.target.value);
        }}
      />
      <div>{post.title}</div>
      {/* <ul>
        {posts.map(post => (
          <li keu={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
