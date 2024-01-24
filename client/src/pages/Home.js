// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Signup from "../components/Signup";
import Login from "../components/Login";

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div>
            <h3>Existing users:</h3>
            <Login />
          </div>
          <div>
            <h3>New users:</h3>
            <Signup />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
