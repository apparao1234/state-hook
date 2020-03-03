import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        setPost(res.data);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input
        type='text'
        value={id}
        onChange={e => {
          setId(e.target.value);
        }}
      />
      <button type='button' onClick={handleClick}>
        Fetch post
      </button>
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
