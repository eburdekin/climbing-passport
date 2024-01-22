import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function About() {
  /* NavBar is on this page */
  return (
    <div>
      <h2>Welcome to 'Send It!'- Your Personal Climbing Passport!</h2>
      <p>
        Whether bouldering, sport climbing, or top roping, 'Send It!' is your
        go-to companion for tracking, sharing and celebrating your climbing
        adventures.
      </p>
      <br />
      <p>
        Explore mountains and add them to your badge collection to create a
        unique climbing passport to showcase your achievements. If a badge needs
        to be updated or deleted, this can be done with the click of a button.
      </p>
      <br />
      <h3>Let the ascent begin!</h3>
    </div>
  );
}

export default About;
