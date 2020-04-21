import React from "react";
import "./screens/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//?screens imports
import Home from "./screens/Home/Home.jsx";
import Register from "./screens/Register/Register.jsx";
import Login from "./screens/Login/Login.jsx";
import LandingPage from "./screens/LandingPage/LandingPage.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home footer childComponent={<LandingPage />} />}
        />
        <Route
          path="/register"
          component={() => <Home fullscreen childComponent={<Register />} />}
        />
        <Route
          path="/login"
          component={() => <Home fullscreen childComponent={<Login />} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
