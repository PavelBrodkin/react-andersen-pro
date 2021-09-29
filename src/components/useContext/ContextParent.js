import React from "react";
import MyContext from "./context";
import Child from "./ContextChild";

function ContextParent() {
  return (
    <MyContext.Provider value={"User Name"}>
      <Child />
    </MyContext.Provider>
  );
}

export default ContextParent;
