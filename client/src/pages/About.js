import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

// material ui components
import Container from "@mui/material/Container";

function About({ user, setUser }) {
  return (
    <>
      <Header />
      <NavBar user={user} setUser={setUser} />
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <br />
        <h1>Welcome to 'Send It!'- Your Personal Climbing Passport</h1>
        <br />
        <h3>
          Whether bouldering, sport climbing, or trad climbing, 'Send It!' is
          your go-to companion for tracking, sharing and celebrating your
          climbing adventures.
        </h3>
        <br />
        <h3>
          Explore crags and add them to your badge collection to create a unique
          climbing passport to showcase your achievements and goals. If a badge
          needs to be updated or deleted, this can be done with the click of a
          button.
        </h3>
        <br />
        <h2>Let the ascent begin, and climb on.</h2>
      </Container>
    </>
  );
}

export default About;
