import React, { useState, useMemo, useEffect, useCallback } from "react";
import ChildMemoComponent from "./ChildMemoComponent";

function ParentMemoComponent() {
  const [count, setCount] = useState(0);
  const arr = useMemo(() => [1, 2, 3, 4, 5], []);

  const fetchData = useCallback(async (type) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${type}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }, []);

  useEffect(() => {
    fetchData("users");
  }, [fetchData]);

  return (
    <div>
      <ChildMemoComponent title="Title" arr={arr} fetchData={fetchData} />
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default ParentMemoComponent;
