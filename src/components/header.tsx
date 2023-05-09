import { Box } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ cursor: "pointer" }}>
        <Link to="/">About</Link>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <Link to="/experience">Job Experience</Link>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <Link to="/education">Education & Certifications</Link>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <Link to="/skills">Skills</Link>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <Link to="/projects">Projects</Link>
      </Box>
    </Box>
  );
};

export default Header;
