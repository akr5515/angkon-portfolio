import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import './header.style.scss';

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: '50px'
      }}
    >
      <Box className = 'header-item'>
        <Link to="/">About</Link>
      </Box>
      <Box className = 'header-item'>
        <Link to="/experience">Job Experience</Link>
      </Box>
      <Box className = 'header-item'>
        <Link to="/education">Education & Certifications</Link>
      </Box>
      <Box className = 'header-item'>
        <Link to="/skills">Skills</Link>
      </Box>
      <Box className = 'header-item'>
        <Link to="/projects">Projects</Link>
      </Box>
    </Box>
  );
};

export default Header;
