import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import PostsWrapper from "./CustomHook/PostsWrapper";
import ContextParent from "../components/useContext/ContextParent";
import ParentMemoComponent from "../components/CallbackAndMemo/ParentMemoComponent";
import ReducerCounter from "../components/ReducerCounter/ReducerCounter";

function Hooks() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Hooks</h2>
      <ul>
        <li>
          <Link to={`${url}/context`}>Context</Link>
        </li>
        <li>
          <Link to={`${url}/state-effect`}>State Effect</Link>
        </li>
        <li>
          <Link to={`${url}/callback-memo`}>Callback Memo</Link>
        </li>
        <li>
          <Link to={`${url}/reducer`}>Reducer</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/context`}>
          <ContextParent />
        </Route>
        <Route path={`${path}/state-effect`}>
          <PostsWrapper />
        </Route>
        <Route path={`${path}/callback-memo`}>
          <ParentMemoComponent />
        </Route>
        <Route path={`${path}/reducer`}>
          <ReducerCounter />
        </Route>
      </Switch>
    </div>
  );
}

export default Hooks;
