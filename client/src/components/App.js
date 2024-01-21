import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mountains">
          <Explore />
        </Route>
        <Route exact path="/badges">
          <ClimbingPassport />
        </Route>
        <Route exact path="/home">
          <Logout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
