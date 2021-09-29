import React, { useContext } from "react";
import MyContext from "./context";

function ContextChild() {
  const context = useContext(MyContext);
  return <div>Context: {context};</div>;
}

export default ContextChild;
