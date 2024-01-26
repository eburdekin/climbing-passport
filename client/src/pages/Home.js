// import { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

import Signup from "../components/Signup";
import Login from "../components/Login";

// material ui components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Home({ user, setUser }) {
  return (
    <>
      <Header />
      <NavBar user={user} setUser={setUser} />
      {user && user.name ? (
        <>
          <Container
            maxWidth="md"
            sx={{ width: "100%", textAlign: "center", marginTop: "80px" }}
          >
            <Typography
              variant="h4"
              style={{ padding: "15px", fontFamily: "Figtree" }}
            >
              <b>Welcome, {user.name}! Time to work on those projects.</b>
            </Typography>
          </Container>
        </>
      ) : (
        <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
          <br />
          <h1>Climb on.</h1>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          ></div>
          <div className="forms-container">
            <div className="form-section existing-user">
              <h2>Ready for more? Log in:</h2>
              <br />
              <Login user={user} setUser={setUser} />
            </div>
            <div className="form-section new-user">
              <h2>New here? Sign up:</h2>
              <br />
              <Signup user={user} setUser={setUser} />
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default Home;
