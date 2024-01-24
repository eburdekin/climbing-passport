import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Mountain from "../components/Mountain";

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
      <div>
        <h1>Search</h1>
        {mountains.map((mountain) => (
          <Mountain key={mountain.id} mountain={mountain} />
        ))}
      </div>
    </>
  );
}

export default Explore;
