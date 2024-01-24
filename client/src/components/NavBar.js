import { NavLink } from "react-router-dom";

// material ui components
import Container from "@mui/material/Container";

function NavBar() {
  const navStyle = {
    padding: "10px",
    width: "100%",
    textAlign: "center",
  };

  const linkStyle = {
    color: "white",
    backgroundColor: "brown",
    borderRadius: "10px",
    fontSize: 20,
    padding: "10px",
    textDecoration: "none",
    margin: "5px",
  };

  const logoStyle = { position: "relative" };

  const overlayStyle = {
    height: "250px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
