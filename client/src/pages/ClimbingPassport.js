import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Badge from "../components/Badge";
import "react-datepicker/dist/react-datepicker.css";
import Container from "@mui/material/Container";

function ClimbingPassport() {
  //Will set as "badges" when auth is connected
  const [mountains, setBadges] = useState([]);

  // Will set as badges once auth is connected
  useEffect(() => {
    fetch("/mountains")
      .then((r) => r.json())
      .then(setBadges);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <h1>My Climbing Passport</h1>
      </Container>
      {mountains.map((mountain) => (
        <Badge key={mountain.id} mountain={mountain} />
      ))}
    </>
  );
}

export default ClimbingPassport;
