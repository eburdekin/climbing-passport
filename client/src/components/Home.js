import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";

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
      <div>
        <header>{/* Mountain photo with logo in the middle*/}</header>
        <h2>Climb on.</h2>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "20px" }}>
            <h3>Existing users:</h3>
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
              <br />
              <label>Password:</label>
              <input
                type="password"
                value={existingUser.password}
                onChange={(e) =>
                  setExistingUser({ ...existingUser, password: e.target.value })
                }
                required
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div>
            <h3>New users:</h3>
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
              <br />
              <label>Password:</label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                required
              />
              <br />
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
      </div>
    </>
  );
}

export default Home;
