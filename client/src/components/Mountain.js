import { useState } from "react";
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

export default function Mountain({ mountain, selectedMountain, user }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    climber_id: user.id,
    mountain_id: mountain.id,
    date: "",
    completed: "",
  });

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
    // setDate(null);
    // setStatus("");
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/badges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("userID", user.id); // Store user ID in local storage
        // Redirect to the appropriate page or display a success message
      } else {
        // Handle signup error (e.g., display error message)
      }
    } catch (error) {
      // Handle network errors
    }

    // set user, navigate to new page - use setUser as props
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
            {/* <DatePicker
              label="Date"
              selected={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              renderInput={(params) => (
                <TextField {...params} style={{ marginBottom: "10px" }} />
              )}
            /> */}
            <TextField
              label="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              sx={{ mt: 2 }}
            ></TextField>
            <br />
            <TextField
              select
              label="Status"
              value={formData.completed}
              onChange={(e) =>
                setFormData({ ...formData, completed: e.target.value })
              }
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
