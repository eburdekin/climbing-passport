// material ui components
import Container from "@mui/material/Container";

export default function Header() {
  const mountainStyle = {
    backgroundImage: "url(https://i.ibb.co/9b6m5Mt/Mountain-range.png)",
    backgroundRepeat: "repeat-x",
    backgroundSize: "contain",
    height: "300px",
    marginBottom: "0",
  };

  return <Container maxWidth="md" style={mountainStyle}></Container>;
}
