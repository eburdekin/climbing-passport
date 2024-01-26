import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Badge from "../components/Badge";
import "react-datepicker/dist/react-datepicker.css";
import {
  // Button,
  // Modal,
  Typography,
  Container,
  TextField,
  MenuItem,
} from "@mui/material";
// import { unstable_ClassNameGenerator } from "@mui/material";

function ClimbingPassport({ user, setUser }) {
  //Will set as "badges" when auth is connected
  const [badges, setBadges] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");

  // Will set as badges once auth is connected
  useEffect(() => {
    fetch("/badges")
      .then((r) => r.json())
      .then(setBadges);
  }, []);

  const filteredBadges =
    user &&
    badges
      .filter((badge) => badge.climber_id === user.id)
      .filter((badge) => !filterStatus || badge.completed === filterStatus);

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
            <TextField
              label="Filter by Status"
              variant="outlined"
              color="success"
              select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              sx={{
                width: "200px",
                marginBottom: 5,
                "& fieldset": { borderColor: "gray" },
                "&:focus": { "& fieldset": { borderColor: "black" } },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Attempted">Attempted</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="To Be Conquered">To Be Conquered</MenuItem>
            </TextField>
          </div>
        ) : (
          <Typography
            variant="h4"
            style={{ padding: "15px", fontFamily: "Figtree" }}
          >
            Time to log in and get started!
          </Typography>
        )}
        {filteredBadges &&
          filteredBadges.map((badge) => (
            <Badge
              key={badge.id}
              badge={badge}
              onDeleteBadge={handleDeleteBadge}
              onEditBadge={handleEditBadge}
            />
          ))}
      </Container>
    </>
  );
}

export default ClimbingPassport;
