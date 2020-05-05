import React from "react";
import "./screens/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//?screens imports
import Home from "./screens/Home/Home.jsx";
import Register from "./screens/Register/Register.jsx";
import Login from "./screens/Login/Login.jsx";
import LandingPage from "./screens/LandingPage/LandingPage.jsx";
import Tours from "./screens/Tours/Tours.jsx";
import ToursDetails from "./screens/Tours/ToursDetails.jsx";
import Shop from "./screens/Shop/Shop.jsx";
import ShopDetail from "./screens/ShopDetail/ShopDetail.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home footer active="home" childComponent={<LandingPage />} />
          )}
        />
        <Route
          exact
          path="/tours"
          component={() => (
            <Home footer active="tours" childComponent={<Tours />} />
          )}
        />
        <Route
          exact
          path="/shop"
          component={() => (
            <Home footer active="shop" childComponent={<Shop />} />
          )}
        />
        <Route
          exact
          path="/shop/detail"
          component={() => (
            <Home footer active="shop" childComponent={<ShopDetail />} />
          )}
        />
        <Route
          exact
          path="/tours/details"
          component={() => (
            <Home footer active="tours" childComponent={<ToursDetails />} />
          )}
        />
        <Route
          exact
          path="/register"
          component={() => <Home fullscreen childComponent={<Register />} />}
        />
        <Route
          exact
          path="/login"
          component={() => <Home fullscreen childComponent={<Login />} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
