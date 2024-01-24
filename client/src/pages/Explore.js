import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Mountain from "../components/Mountain";
import Map from "../components/Map";

// Material-UI components
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

function Explore() {
  const [mountains, setMountains] = useState([]);
  const [selectedMountain, setSelectedMountain] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Slow fade in
  useEffect(() => {
    // Add the 'loaded' class when the component mounts
    document.body.classList.add("loaded");

    // Clean up by removing the 'loaded' class after a short delay (adjust duration as needed)
    const timeoutId = setTimeout(() => {
      // document.body.classList.remove("loaded"); // Remove this line to keep the 'loaded' class
    }, 1000); // 1 second delay, adjust as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    fetch("/mountains")
      .then((r) => r.json())
      .then(setMountains);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMountains = mountains.filter((mountain) =>
    mountain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMarkerClick = (mountain) => {
    // Handle marker click logic (e.g., fetch mountain details from backend)
    setSelectedMountain(mountain);
  };

  return (
    <>
      <Header />
      <NavBar />
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <br />
        <TextField
          label="Search Mountains"
          variant="outlined"
          color="success"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            marginBottom: 5,
            "& fieldset": { borderColor: "gray" }, // Set the initial outline color
            "&:focus": { "& fieldset": { borderColor: "black" } }, // Set the outline color when focused
          }}
        />
        <Map
          mountains={filteredMountains}
          onMarkerClick={handleMarkerClick}
          selectedMountain={selectedMountain}
        />
        <br />
        {filteredMountains.map((mountain) => (
          <Mountain
            key={mountain.id}
            mountain={mountain}
            selectedMountain={selectedMountain}
          />
        ))}
      </Container>
    </>
  );
}

export default Explore;
