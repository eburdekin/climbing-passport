import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function ClimbingPassport() {
  return (
    <>
      <Header />
      <NavBar />
      <div>
        <h1>Climbing Passport</h1>
        {/* Can delete or update a badge on this page. A modal pops up to edit the badge or deleting it removes the badge. When either action is taken, an alert pops up informing the user the badge has been edited or deleted */}
      </div>
    </>
  );
}

export default ClimbingPassport;
