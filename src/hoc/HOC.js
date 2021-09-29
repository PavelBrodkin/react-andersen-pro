import React, { useState } from "react";

const hoc = (Component, data) => {
  const HOC = (props) => {
    const [count, setCount] = useState(data);
    const handleClick = () => setCount((prev) => prev + 1);
    
    return <Component count={count} handleClick={handleClick} {...props}/>;
  };

  return HOC;
};

export default hoc;
