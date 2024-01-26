import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Login({ user, setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("userID", user.id);
        setUser(user); // Store user ID in local storage
        // Redirect to the appropriate page or display a success message
      } else {
        // Handle signup error (e.g., display error message)
      }
    } catch (error) {
      // Handle network errors
    }
    // Handle existing user form submission logic here
    // Redirect to /login after submission
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}
