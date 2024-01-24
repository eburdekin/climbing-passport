// material ui components
import Container from "@mui/material/Container";

export default function Header() {
  const mountainStyle = {
    backgroundImage: "url(https://i.ibb.co/DGsNdR9/Untitled-design-1-2.png)",
    backgroundRepeat: "repeat-x",
    backgroundSize: "contain",
    height: "150px",
    marginBottom: "0",
  };

  return <Container maxWidth="md" style={mountainStyle}></Container>;
}
