import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Container,
  Box,
  Avatar,
  Typography,
  IconButton,
  Link,
  AppBar,
  Tabs,
  Tab,
} from "@mui/material";
import SimpleBar from "simplebar-react";

import Experience from "./components/experience";
import Education from "./components/education";
import HomePage from "./components/homepage";
import Header from "./components/header";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certifications from "./components/certifications";
import "simplebar-react/dist/simplebar.min.css";

function App() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </Container>
    </SimpleBar>
  );
}

export default App;
