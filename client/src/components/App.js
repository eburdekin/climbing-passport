import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import About from "../pages/About";
import ClimbingPassport from "../pages/ClimbingPassport";
import Login from "./Login";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("/check_session")
      .then((r) => r.json())
      .then((u) => setUser(u));
  }, []);

  console.log(user);
  return (
    <Router>
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
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
