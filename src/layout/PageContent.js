import { Route, Redirect, Switch } from "react-router-dom/cjs/react-router-dom";

import Home from "../pages/Home";

export default function PageContent() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}
