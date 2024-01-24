import { useEffect, useState } from "react";
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

export default function Mountain({ mountain, selectedMountain }) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState("");

  const MountainListItem = styled("li")({
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
    // position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
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
    <MountainListItem key={mountain.id}>
      <span>
        {mountain.name}, {mountain.location}, {mountain.type}, {mountain.grade}
        <Button onClick={handleClick} sx={{ color: "brown" }}>
          {" "}
          + Add badge
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
              <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </span>
      {selectedMountain && selectedMountain.id === mountain.id && (
        <div>
          {/* Display detailed information about the selected mountain */}
          {/* You can use selectedMountain information here */}
        </div>
      )}
    </MountainListItem>
  );
}
