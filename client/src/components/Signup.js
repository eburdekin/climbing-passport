import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
    <Box>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="email"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label>Email:</label>
        <input
          type="password"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: e.target.value,
            })
          }
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}
