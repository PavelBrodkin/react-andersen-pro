import React from "react";
import hoc from "./HOC";

const HoverCount = ({ count, handleClick, name, text }) => {
  return (
    <div>
      <p>
        {name}: {count}
      </p>

      <h2 onMouseEnter={handleClick}>{text}</h2>
    </div>
  );
};

export default hoc(HoverCount, 50);
