import React, { useEffect } from "react";

function ChildMemoComponent({ title, fetchData }) {
  console.log("CHILD RE_RENEDER");

  useEffect(() => {
    fetchData("todos");
  }, [fetchData]);

  return (
    <div>
      Child Memo Component
      {title}
    </div>
  );
}

export default React.memo(ChildMemoComponent);
