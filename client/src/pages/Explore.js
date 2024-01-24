import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Mountain from "../components/Mountain";

// material ui components
import Container from "@mui/material/Container";

function Explore() {
  const [mountains, setMountains] = useState([]);

  useEffect(() => {
    fetch("/mountains")
      .then((r) => r.json())
      .then(setMountains);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <h1>Search</h1>
        {mountains.map((mountain) => (
          <Mountain key={mountain.id} mountain={mountain} />
        ))}
      </Container>
    </>
  );
}

export default Explore;
