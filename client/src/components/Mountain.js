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
    justifyContent: "space-between",
    alignItems: "center",
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
    <MountainListItem key={mountain.id}>
      <span style={{ padding: "0 20px", width: "100%" }}>
        <span style={{ marginRight: "8px" }}>{mountain.name} |</span>
        <span style={{ marginRight: "8px" }}>{mountain.location} |</span>
        <span style={{ marginRight: "8px" }}>{mountain.grade} |</span>
        <span style={{ marginRight: "8px" }}>{mountain.type} </span>
        <Button
          onClick={handleClick}
          sx={{
            color: "brown",
            padding: "5px",
            "&:hover": { backgroundColor: "#b9c6cc" },
          }}
          variant="outlined"
        >
          {" "}
          +
        </Button>
      </span>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Badge to Climbing Passport
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
              <MenuItem value="SummitPlan">To Be Conquered</MenuItem>
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
      {selectedMountain && selectedMountain.id === mountain.id && (
        <div>
          {/* Display detailed information about the selected mountain */}
          {/* You can use selectedMountain information here */}
        </div>
      )}
    </MountainListItem>
  );
}
