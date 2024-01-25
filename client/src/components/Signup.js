import { useState } from "react";
import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5555/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("userID", user.id); // Store user ID in local storage
        // Redirect to the appropriate page or display a success message
      } else {
        // Handle signup error (e.g., display error message)
      }
    } catch (error) {
      // Handle network errors
    }
  };

  const authenticatedFetch = async (url, options = {}) => {
    const userID = localStorage.getItem("userID");
    const token = `Bearer ${userID}`; // Assuming you're using Bearer tokens

    options.headers = {
      ...options.headers,
      Authorization: token,
    };

    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <Box
      height={50}
      width={20}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>

        <input
          type="name"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label htmlFor="email">Email:</label>

        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button type="submit">Sign Up</button>
      </form>
    </Box>
  );
}
