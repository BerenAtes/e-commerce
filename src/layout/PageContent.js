import { Route, Redirect, Switch } from "react-router-dom/cjs/react-router-dom";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import About from "../pages/About";
import Team from "../pages/Team";
import Contact from "../pages/Contact";

export default function PageContent() {
  return (
    <Switch>
      <Route path="/shop/product">
        <Product />
      </Route>
      <Route path="/shop">
        <ProductList />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/contact">
        <Contact />
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
