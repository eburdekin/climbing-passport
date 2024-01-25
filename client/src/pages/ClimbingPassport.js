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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// material ui components
import Container from "@mui/material/Container";

function ClimbingPassport() {
  {
    /*Modal stuff:*/
  }
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
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
    height: 300,
    border: "2px solid #000",
    boxShadow: "none",
    p: 2,
    textAlign: "center",
    borderRadius: "5px",
    backgroundColor: "#b9c6cc",
    overflow: "auto",
    borderRadius: "5px",
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
    setDate(null);
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
          <Button
            onClick={handleClick}
            sx={{ color: "brown", "&:hover": { backgroundColor: "#b9c6cc" } }}
          >
            {" "}
            Edit
          </Button>
          <Button
            onClick={handleClick}
            sx={{ color: "brown", "&:hover": { backgroundColor: "#b9c6cc" } }}
          >
            {" "}
            Delete
          </Button>
          <Modal
            open={open}
            sx={modalStyle}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            transitioncomponent={Slide}
            transitionduration={1000}
            hideBackdrop={true}
          >
            <Box>
              <Button onClick={handleClose} style={buttonStyle}>
                X
              </Button>
              {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Badge
              </Typography> */}
              <br />
              <form style={formStyle}>
                <Typography id="datepicker-title" component="h3">
                  Select a date
                </Typography>
                <DatePicker
                  label="Date"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  renderInput={(params) => (
                    <TextField {...params} style={{ marginBottom: "10px" }} />
                  )}
                />
                <br />
                <TextField
                  select
                  label="Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  sx={{ mt: 2 }}
                >
                  <MenuItem value="Attempted">Attempted</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="SummitPlan">Summit Plan</MenuItem>
                </TextField>
                <br />
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#263940",
                    "&:hover": { backgroundColor: "#3b545d" },
                  }}
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
