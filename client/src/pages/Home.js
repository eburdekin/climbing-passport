import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

import Signup from "../components/Signup";
import Login from "../components/Login";

// material ui components
import Container from "@mui/material/Container";

function Home() {
  const [existingUser, setExistingUser] = useState({
    email: "",
    password: "",
  });

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleExistingUserSubmit = (e) => {
    e.preventDefault();
    // Handle existing user form submission logic here
    // Redirect to /login after submission
  };

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    // Handle new user form submission logic here
    // Redirect to /login after submission
  };

  return (
    <>
      <Header />
      <NavBar />
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
      </Container>

      <div className="forms-container">
        <div className="form-section">
          <h3>Existing users:</h3>
          <br />
          <form onSubmit={handleExistingUserSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={existingUser.email}
              onChange={(e) =>
                setExistingUser({ ...existingUser, email: e.target.value })
              }
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={existingUser.password}
              onChange={(e) =>
                setExistingUser({ ...existingUser, password: e.target.value })
              }
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="form-section">
          <h3>New users:</h3>
          <br />
          <form onSubmit={handleNewUserSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              required
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              value={newUser.confirmPassword}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  confirmPassword: e.target.value,
                })
              }
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
