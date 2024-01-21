import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  /* NavBar is on this page */
  return (
    <div>
      <h1>Welcome Climber {user}!</h1>
      <p>Time to work on those projects</p>
    </div>
  );
}

export default Login;
