import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

import Signup from "../components/Signup";
import Login from "../components/Login";

// material ui components
import Container from "@mui/material/Container";

function Home() {
  // Slow fade in
  useEffect(() => {
    // Add the 'loaded' class when the component mounts
    document.body.classList.add("loaded");

    // Clean up by removing the 'loaded' class after a short delay (adjust duration as needed)
    const timeoutId = setTimeout(() => {
      // document.body.classList.remove("loaded");
    }, 1000); // 1 second delay, adjust as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  // these components already exist - Signup.js and Login.js. adding updated code to those

  // const [existingUser, setExistingUser] = useState({
  //   email: "",
  //   password: "",
  // });

  // // const [newUser, setNewUser] = useState({
  // //   email: "",
  // //   password: "",
  // //   confirmPassword: "",
  // // });

  // const handleExistingUserSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle existing user form submission logic here
  //   // Redirect to /login after submission
  // };

  // const handleNewUserSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle new user form submission logic here
  //   // Redirect to /login after submission
  // };

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
        <div className="form-section existing-user">
          <h3>Existing users:</h3>
          <br />
          <Login />
        </div>
        <div className="form-section new-user">
          <h3>New users:</h3>
          <br />
          <Signup />
        </div>
      </div>
    </>
  );
}

export default Home;
