import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Badge from "../components/Badge";
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
import Container from "@mui/material/Container";

function ClimbingPassport() {
  //Will set as "badges" when auth is connected
  const [mountains, setBadges] = useState([]);

  // Will set as badges once auth is connected
  useEffect(() => {
    fetch("/mountains")
      .then((r) => r.json())
      .then(setBadges);
  }, []);

  // Modal stuff:

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState("");

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
      </Container>
      {mountains.map((mountain) => (
        <Badge key={mountain.id} mountain={mountain} />
      ))}
      {/* <Button
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
          </Modal> */}
      {/* </span> */}
    </>
  );
}

export default ClimbingPassport;
