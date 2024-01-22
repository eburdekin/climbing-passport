import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Logout() {
  /* NavBar is on this page */
  return (
    <div>
      <h1>Send It!</h1>
      <p>
        Welcome to 'Send It!', Your Personal Climbing Passport!
        <br />
        Explore mountains and add them to your badge collection to create a
        unique climbing passport to showcase your achievements. If a badge needs
        to be updated or deleted, this can be done with the click of a button.
        <br />
        Whether bouldering, sport climbing, or top roping, 'Send It!' is your go-to companion for tracking, sharing and celebrating your climbing adventures.
        <br />
        Let the ascent begin!
      </p>
      <h3>Existing user?</h3>
      {/* This form will already be on the page. User submits email and password to log in. After submitting, user is taken to /login */}
      <h3>New user?</h3>
      {/* This form will already be on the page. User submits new email and password to log in. After submitting, user is taken to /login */}
    </div>
  );
}
}

export default Logout;
