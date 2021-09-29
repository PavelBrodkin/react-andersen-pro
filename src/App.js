import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
import HoverCount from "./hoc/HoverCount";
import CommentsCount from "./hoc/CommentsCount";
import Parent from "./renderProp/Parent";
import { Children1, Children2 } from "./renderProp/Children";
import Hooks from "./hooks/Hooks";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Menu />
        <Switch>
          <Route path="/hoc">
            <HoverCount name="Hover Count" text="Hover Me" />
            <CommentsCount name="Comments Count" text="Add Comment" />
          </Route>
          <Route path="/renderProp">
            <Parent render={(data) => <Children1 data={data} />} />
            <Parent render={(data) => <Children2 data={data} />} />
          </Route>
          <Route path="/hooks">
            <Hooks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
