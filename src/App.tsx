import "./App.css";
import { Container, Box, Avatar, Typography, IconButton } from "@mui/material";
import AngkonImage from "./images/angkon.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          margin: "40px auto",
          gap: "30px",
        }}
      >
        <Box>
          <Avatar
            src={AngkonImage}
            alt="Angkon"
            sx={{ height: "170px", width: "150px" }}
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "24px" }}>
            Hi, Iam Angkon Kumar Roy
          </Typography>
          <Typography>
            Software engineer with nearly 2years of front-end developing
            experience with ReactJS and strong communication skill in
            English(both verbal and written). Focusing on reusable components,
            pixel perfect designing, problem solving and optimizing performance
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          onClick={() => window.open("https://github.com/akr5515", "_blank")}
          // sx={{ height: "50px", width: "50px" }}
        >
          <GitHubIcon style={{ height: "40px", width: "40px" }} />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/angkon-kumar-roy/",
              "_blank"
            )
          }
        >
          <LinkedInIcon style={{ height: "40px", width: "40px" }} />
        </IconButton>
      </Box>
    </Container>
  );
}

export default App;
