import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

// material ui components
import Container from "@mui/material/Container";

function Home() {
  /* NavBar is on this page */
  return (
    <>
      <Header />
      <NavBar />
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <header>{/* Mountain photo with logo in the middle*/}</header>
        <h2>Climb on.</h2>
        <br />
        <h3>Existing users:</h3>
        {/* This form will already be on the page. User submits email and password to log in. After submitting, user is taken to /login */}
        <h3>New users:</h3>
        {/* This form will already be on the page. User submits new email and password to log in. After submitting, user is taken to /login */}
      </Container>
    </>
  );
}

export default Home;
