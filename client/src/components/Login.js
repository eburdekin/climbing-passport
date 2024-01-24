// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Login() {
  return (
    <Box
      height={50}
      width={20}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
    >
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label htmlFor="email">Email:</label>

        <input
          type="email"
          id="loginemail"
          // value={formData.email}
          // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="loginpassword"
          // value={formData.password}
          // onChange={(e) =>
          //   setFormData({ ...formData, password: e.target.value })
        />

        <button type="submit">Log In</button>
      </form>
    </Box>
  );
}
