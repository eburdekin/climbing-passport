import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Badge from "../components/Badge";
import "react-datepicker/dist/react-datepicker.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import { unstable_ClassNameGenerator } from "@mui/material";

function ClimbingPassport({ user, setUser }) {
  //Will set as "badges" when auth is connected
  const [badges, setBadges] = useState([]);

  // Will set as badges once auth is connected
  useEffect(() => {
    fetch("/badges")
      .then((r) => r.json())
      .then(setBadges);
  }, []);

  const filteredBadges =
    user && badges.filter((badge) => badge.climber_id === user.id);

  const handleDeleteBadge = (deletedBadgeId) => {
    // Remove the deleted badge from the parent component's state
    setBadges((badges) =>
      badges.filter((badge) => badge.id !== deletedBadgeId)
    );
  };

  const handleEditBadge = (editedBadgeId, updatedData) => {
    // Update the edited badge in the parent component's state
    setBadges((badges) =>
      badges.map((badge) =>
        badge.id === editedBadgeId ? { ...badge, ...updatedData } : badge
      )
    );
  };
  return (
    <>
      <Header />
      <NavBar user={user} setUser={setUser} />
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        {user && user.name ? (
          <div style={{ padding: "15px" }}>
            <Typography
              variant="h4"
              style={{ padding: "15px", fontFamily: "Figtree" }}
            >
              {user.name}'s Climbing Passport
            </Typography>
          </div>
        ) : (
          <Typography
            variant="h4"
            style={{ padding: "15px", fontFamily: "Figtree" }}
          >
            Time to log in and get started!
          </Typography>
        )}
      </Container>
      {filteredBadges &&
        filteredBadges.map((badge) => (
          <Badge
            key={badge.id}
            badge={badge}
            onDeleteBadge={handleDeleteBadge}
            onEditBadge={handleEditBadge}
          />
        ))}
    </>
  );
}

export default ClimbingPassport;
