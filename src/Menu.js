import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div>
          <Link to="/hoc">hoc</Link>
        </div>
        <div>
          {" "}
          <Link to="/renderProp">renderProp</Link>
        </div>
        <div>
          {" "}
          <Link to="/hooks">hooks</Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
