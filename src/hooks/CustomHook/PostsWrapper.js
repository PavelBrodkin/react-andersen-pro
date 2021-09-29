import React from "react";

import { useFetch } from "./useFetch";
import "./PostsWrapper.style.css";

const PostsWrapper = () => {
  const { state, error } = useFetch();

  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <ul className="posts">
      {state.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsWrapper;
