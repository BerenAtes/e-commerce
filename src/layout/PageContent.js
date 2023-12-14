import { Route, Redirect, Switch } from "react-router-dom/cjs/react-router-dom";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";

export default function PageContent() {
  return (
    <Switch>
      <Route path="/shop">
        <ProductList />
      </Route>

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}
