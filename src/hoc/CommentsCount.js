import React from "react";
import hoc from "./HOC";

const CommentsCount = ({ count, handleClick, name, text }) => {
  return (
    <div>
      <h3>
        {name}: {count}
      </h3>

      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default hoc(CommentsCount, 100);
