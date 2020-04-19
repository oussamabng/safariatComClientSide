import React from "react";
import "./screens/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//?screens imports
import Home from "./screens/Home/Home.jsx";
import Register from "./screens/Register/Register.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home footer />} />
        <Route
          path="/register"
          component={() => <Home childComponent={<Register />} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
