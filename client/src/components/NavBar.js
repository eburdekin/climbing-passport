import { useState } from "react";
import { NavLink } from "react-router-dom";

// material ui components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function NavBar({ user, setUser }) {
  const navStyle = {
    padding: "10px",
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "white",
    backgroundColor: "#A8672A",
    borderRadius: "10px",
    padding: "10px",
    textDecoration: "none",
    margin: "5px",
  };

  const logoutStyle = {
    color: "white",
    backgroundColor: "#A8672A",
    borderRadius: "10px",
    padding: "10px",
    textDecoration: "none",
    margin: "5px",
    display: "inline-block",
    fontFamily: "Figtree",
    height: "21px",
  };

  const logoStyle = { position: "relative" };

  const overlayStyle = {
    height: "250px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const handleClick = async (event) => {
    try {
      const response = await fetch("/logout", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        localStorage.removeItem("userID");
        setUser(null);
      } else {
        // Handle signup error (e.g., display error message)
      }
    } catch (error) {
      // Handle network errors
    }
    // set user, navigate to new page - use setUser as props
  };

  return (
    <>
      <Container maxWidth="md" style={navStyle}>
        <NavLink to="/" style={linkStyle}>
          Send It!
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/explore" style={linkStyle}>
          Explore
        </NavLink>
        <NavLink to="/badges" style={linkStyle}>
          My Climbing Passport
        </NavLink>
        {user && user.name ? (
          <Typography onClick={handleClick} style={logoutStyle}>
            Logout
          </Typography>
        ) : (
          ""
        )}
      </Container>
      <Container style={logoStyle}>
        <img
          src="/background.jpeg"
          alt="hero"
          border="1px solid black"
          width="100%"
        ></img>
        <img src="/logo.png" alt="logo" style={overlayStyle}></img>
      </Container>
    </>
  );
}

export default NavBar;
