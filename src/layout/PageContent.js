import { Route, Redirect, Switch } from "react-router-dom/cjs/react-router-dom";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import About from "../pages/About";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AxiosInstance, renewAxiosInstance } from "../components/Api/api";
import { setCategories, setRoles } from "../store/actions/globalAction";
import { loginUser, logoutUser } from "../store/actions/userAction";
import { ToastContainer } from "react-toastify";

export default function PageContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoles());
    dispatch(setCategories());

    const token = localStorage.getItem("token");
    if (token) {
      AxiosInstance.get("/verify")
        .then((response) => {
          console.log("token verify res > ", response);

          const user = response.data;
          dispatch(loginUser(user));
          renewAxiosInstance();
          console.log("verified", user);
        })
        .catch((error) => {
          console.error("token verify err > ", error);
          dispatch(logoutUser());
          localStorage.removeItem("token");
          renewAxiosInstance();
        });
    }
  }, [dispatch]);
  return (
    <div>
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
        </Route>{" "}
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
