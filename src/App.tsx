import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Container,
  Box,
  Avatar,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Experience from "./components/experience";
import Education from "./components/education";
import HomePage from "./components/homepage";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Container>
  );
}

export default App;
