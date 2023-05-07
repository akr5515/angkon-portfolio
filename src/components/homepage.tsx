import "../App.css";
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
// import Experience from "./components/experience";
// import Education from "./components/education";

import AngkonImage from "./images/angkon.jpg";
import CLanguageIcon from "./images/icons/icon-c.png";
import CPlusPlusIcon from "./images/icons/icon-cplus.png";
import JavascriptIcon from "./images/icons/icon-javascript.png";
import PhpIcon from "./images/icons/icon-javascript.png";
import PythonIcon from "./images/icons/icon-python.png";
import TypescriptIcon from "./images/icons/icon-typescript.png";

import ReactIcon from "./images/icons/icon-react.png";
import LaravelIcon from "./images/icons/icon-laravel.png";
import ExpressIcon from "./images/icons/icon-express.png";

import MaterialIcon from "./images/icons/icon-materialUI.png";
import AntdIcon from "./images/icons/icon-antd.png";

import JestIcon from "./images/icons/icon-jest.png";
import ReactTestingIcon from "./images/icons/icon-reactTestingLibrary.png";

import JiraIcon from "./images/icons/icon-jira.png";
import ConfluenceIcon from "./images/icons/icon-confluence.png";
import GitHubIconImg from "./images/icons/icon-github.png";
import GitIcon from "./images/icons/icon-git.png";
import GerritIcon from "./images/icons/icon-gerrit.png";
import RedmineIcon from "./images/icons/icon-redmine.png";

import NodeJsIcon from "./images/icons/icon-nodejs.png";
import MongoDbIcon from "./images/icons/icon-mongodb.png";
import GoogleAnalyticsIcon from "./images/icons/icon-googleAnalytics.png";

function HomePage() {
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
            Hi, I am Angkon Kumar Roy
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

      {/* <Experience />
      <Education /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <Box sx={{ margin: "auto" }}>
          <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
            Skills
          </Typography>
        </Box>
        <Box sx={{ margin: "auto" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Languages
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <img
                src={TypescriptIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Typescript</Typography>
            </Box>
            <Box>
              <img
                src={JavascriptIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Javascript</Typography>
            </Box>
            <Box>
              <img
                src={CLanguageIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>C++</Typography>
            </Box>
            <Box>
              <img
                src={CPlusPlusIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>C++</Typography>
            </Box>
            <Box>
              <img
                src={PythonIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Python</Typography>
            </Box>
            <Box>
              <img
                src={PhpIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>PHP</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ margin: "auto", marginTop: "20px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Frameworks & Libraries
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <img
                src={ReactIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>ReactJS</Typography>
            </Box>
            <Box>
              <img
                src={ExpressIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>ExpressJS</Typography>
            </Box>
            <Box>
              <img
                src={LaravelIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Laravel</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ margin: "auto", marginTop: "20px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            UI Design Libraries
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <img
                src={MaterialIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Material UI</Typography>
            </Box>
            <Box>
              <img
                src={AntdIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Ant Design</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ margin: "auto", marginTop: "20px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Testing Libraries
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <img
                src={JestIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Jest</Typography>
            </Box>
            <Box>
              <img
                src={ReactTestingIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>
                React Testing Library
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ margin: "auto", marginTop: "20px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Project & Code Management
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <img
                src={JestIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Jest</Typography>
            </Box>
            <Box>
              <img
                src={ReactTestingIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>
                React Testing Library
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ margin: "auto", marginTop: "20px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Project & Code Management
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <img
                src={JiraIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Jira</Typography>
            </Box>
            <Box>
              <img
                src={ConfluenceIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Confluence</Typography>
            </Box>

            <Box>
              <img
                src={GitIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Git</Typography>
            </Box>
            <Box>
              <img
                src={GitHubIconImg}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>GitHub</Typography>
            </Box>
            <Box>
              <img
                src={GerritIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Gerrit</Typography>
            </Box>

            <Box>
              <img
                src={RedmineIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>Redmine</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ margin: "auto", marginTop: "20px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Other Technologies
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <img
                src={NodeJsIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>NodeJs</Typography>
            </Box>
            <Box>
              <img
                src={MongoDbIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>MongoDB</Typography>
            </Box>
            <Box>
              <img
                src={GoogleAnalyticsIcon}
                alt="img"
                style={{ height: "60px", width: "60px" }}
              />
              <Typography sx={{ textAlign: "center" }}>
                Google Analytics
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
