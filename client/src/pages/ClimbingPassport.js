import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import {
  Button,
  Modal,
  Typography,
  Box,
  Slide,
  TextField,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";

// material ui components
import Container from "@mui/material/Container";

function ClimbingPassport() {
  {
    /*Modal stuff:*/
  }
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState("");

  const BadgeListItem = styled("li")({
    listStyle: "none",
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  });

  const modalStyle = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000000",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
    textAlign: "center",
    transition: "background-color 0.5s ease", // Add this line for the transition effect
  };

  const buttonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "black",
  };

  const formStyle = {
    mt: 2,
    display: "flex",
    flexDirection: "column",
  };

  const handleClick = () => {
    setOpen(!open);
    // Reset input values when modal is opened
    setSelectedDate(null);
    setStatus("");
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    // Handle the submission logic here
    // You can use the values of 'selectedDate' and 'status'
    // Close the modal after submitting
    setOpen(false);
  };

  return (
    <>
      <Header />
      <NavBar />
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <h1>My Climbing Passport</h1>
        {/* Can delete or update a badge on this page. A modal pops up to edit the badge or deleting it removes the badge. When either action is taken, an alert pops up informing the user the badge has been edited or deleted */}
      </Container>
      <BadgeListItem>
        <span>
          {/* {mountain.name}, {mountain.location}, {mountain.type},{" "}
          {mountain.grade} */}
          <Button onClick={handleClick} sx={{ color: "brown" }}>
            {" "}
            + Edit badge
          </Button>
          <Modal
            open={open}
            sx={modalStyle}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            transitioncomponent={Slide}
            transitionduration={1000}
          >
            <Box>
              <Button onClick={handleClose} style={buttonStyle}>
                X
              </Button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Badge
              </Typography>
              <form style={formStyle}>
                {/* <DatePicker
                label="Date"
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                renderInput={(params) => (
                  <TextField {...params} style={{ marginBottom: "10px" }} />
                )}
              /> */}
                <TextField
                  select
                  label="Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  sx={{ mt: 2 }}
                >
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Attempted">Attempted</MenuItem>
                </TextField>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Modal>
        </span>
      </BadgeListItem>
    </>
  );
}

export default ClimbingPassport;
