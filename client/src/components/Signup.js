import { useState } from "react";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { Link } from "react-router-dom";

export default function Signup({ user, setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("userID", user.id); // Store user ID in local storage
        // Redirect to the appropriate page or display a success message
        setUser(user);
      } else {
        // Handle signup error (e.g., display error message)
      }
    } catch (error) {
      // Handle network errors
    }
    // set user, navigate to new page - use setUser as props
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          // type="email"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <br />
        <label style={{ marginTop: "15px" }}>Email:</label>
        <input
          // type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label style={{ marginTop: "15px" }}>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
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
