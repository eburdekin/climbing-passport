import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <header>{/* Mountain photo with logo in the middle*/}</header>
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
        {user && user.name ? (
          <Typography variant="h4">Hello {user.name}!</Typography>
        ) : (
          <div className="forms-container">
            <div className="form-section existing-user">
              <h3>Existing users:</h3>
              <br />
              <Login />
            </div>
            <div className="form-section new-user">
              <h3>New users:</h3>
              <br />
              <Signup user={user} setUser={setUser} />
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

export default Home;
