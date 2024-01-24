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

  return (
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
      <img src="https://i.ibb.co/HtKpR0D/hero.jpg" alt="hero"></img>
      <img src="/logo.png" alt="logo"></img>
    </Container>
  );
}

export default NavBar;
