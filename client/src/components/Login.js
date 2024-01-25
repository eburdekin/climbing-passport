import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Login() {
  const [existingUser, setExistingUser] = useState({
    email: "",
    password: "",
  });

  const handleExistingUserSubmit = (e) => {
    e.preventDefault();
    // Handle existing user form submission logic here
    // Redirect to /login after submission
  };

  return (
    <Box>
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
    </Box>
  );
}
