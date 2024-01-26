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

export default function Badge({ badge, onDeleteBadge, onEditBadge }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    climber_id: badge.climber_id,
    mountain_id: badge.mountain_id,
    date: "",
    completed: "",
  });
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const BadgeListItem = styled("li")({
    listStyle: "none",
    padding: "50px",
    marginBottom: "20px",
    marginTop: "20px",
    borderRadius: "5px",
    textAlign: "center",
    display: "inline-grid",
    margin: "5px",
    width: "300px",
    height: "350px",
    position: "relative", // Add this line to position the photo overlay

    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `url('https://i.ibb.co/KFtKBXR/Untitled-design-1-3.png')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      zIndex: -1,
      opacity: "0.75",
    },
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

  const deleteConfirmationModalStyle = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 175,
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
    top: "5px",
    right: "10px",
  };

  const formStyle = {
    mt: 2,
    display: "flex",
    flexDirection: "column",
  };

  const handleEdit = (e) => {
    setOpen(!open);
    // Reset input values when modal is opened
  };

  const handleDeleteConfirmation = () => {
    setDeleteConfirmationOpen(true);
  };

  const exitDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleDelete = async (e) => {
    try {
      const response = await fetch(`/badges/${badge.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        onDeleteBadge(badge.id);
      } else {
        // Handle signup error (e.g., display error message)
      }
    } catch (error) {
      // Handle network errors
    }
    setDeleteConfirmationOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setDeleteConfirmationOpen(false);
  };

  const handleSubmit = async (e) => {
    // Handle the submission logic here
    try {
      const response = await fetch(`/badges/${badge.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onEditBadge(badge.id, formData);
      } else {
        // Handle signup error (e.g., display error message)
      }
    } catch (error) {
      // Handle network errors
    }
    setOpen(false);
  };

  return (
    <BadgeListItem key={badge.id}>
      <span>
        <div style={{ marginTop: "50px" }}>
          <b>{badge.mountain.name}</b>
        </div>
        <div>---</div>
        <div>{badge.mountain.location}</div>
        <div>---</div>
        <div>
          {badge.mountain.grade} {badge.mountain.type}
        </div>
        <div>---</div>
        <div>
          {badge.completed} on {badge.date}
        </div>
        <div>---</div>
        <div>
          <Button
            onClick={handleEdit}
            sx={{
              color: "brown",
              "&:hover": { backgroundColor: "#b9c6cc" },
            }}
          >
            {" "}
            Edit
          </Button>
        </div>
        <div>
          <Button
            onClick={handleDeleteConfirmation}
            sx={{ color: "brown", "&:hover": { backgroundColor: "#b9c6cc" } }}
          >
            {" "}
            Delete
          </Button>
        </div>
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
            Edit Badge
          </Typography>
          <br />
          <form style={formStyle}>
            <Typography id="datepicker-title" component="h3">
              Select a date
            </Typography>
            {/* <DatePicker
              label="Date"
              selected={date}
              onChange={(date) => setDate(date)}
              renderInput={(params) => (
                <TextField {...params} style={{ marginBottom: "10px" }} />
              )}
            /> */}
            <br />
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
      <Modal
        open={deleteConfirmationOpen}
        sx={deleteConfirmationModalStyle}
        onClose={handleClose}
        aria-labelledby="delete-confirmation-modal-title"
        aria-describedby="delete-confirmation-modal-description"
        transitioncomponent={Slide}
        transitionduration={1000}
        hideBackdrop={true}
      >
        <Box>
          <Button onClick={exitDeleteConfirmation} style={buttonStyle}>
            X
          </Button>
          <br />
          <Typography variant="h6" component="h2">
            Are you sure you want to delete this badge?
          </Typography>
          <br />
          <Button
            onClick={handleDelete}
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#263940",
              "&:hover": { backgroundColor: "#3b545d" },
            }}
          >
            Confirm Delete
          </Button>
        </Box>
      </Modal>
    </BadgeListItem>
  );
}
