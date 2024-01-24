import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import About from "../pages/About";
import ClimbingPassport from "../pages/ClimbingPassport";
import Logout from "./Logout";
import Login from "./Login";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/badges">
            <ClimbingPassport />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
