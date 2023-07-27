import { Box, Typography, IconButton, Link } from "@mui/material";

const Experience = () => {
  return (
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
        <Typography
          sx={{ fontSize: "18px", fontWeight: "600", width: "150px" }}
        >
          Experience
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "24px" }}>
          Software Engineer (Full Stack Developer)
        </Typography>
        <Typography>
          <Link href="https://bjitgroup.com/" target="_blank">
            BJIT
          </Link>
          • August 2021 - Present
        </Typography>
        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ fontWeight: "600", '&:hover':{
            cursor: 'pointer'
          } }} onClick={()=>window.open('https://www.pocketalk.com/pocketalk-ventana/','_blank','noreferrer')}>
            Pocketalk Ventana
          </Typography>
          <Typography>
            Currently working on a ReactJS project as Frontend Engineer that
            highly focuses on pixel perfect designing with MUI, cross browser
            compatibility and optimized performance. Creating reusable
            components, implementing logic as per requirements and solving
            designing problems. Adobe XD is being used for design guide. I
            create custom hooks to satisfy all the functional needs and work
            with REST APIs heavily. Several react libraries have been used such
            as react-window, simplebar-react, chartJS etc to meet the
            requirements and faster performance of the application.
          </Typography>
         
        </Box>
        <Box sx={{ marginTop: "10px" }}>
        <Typography sx={{ fontWeight: "600", '&:hover':{
            cursor: 'pointer'
          } }} onClick={()=>window.open(' https://market.openpost.co.jp','_blank','noreferrer')}>
            A Digital Asset Marketplace
          </Typography>
          <Typography>
            Worked on developing client side interface of a Digital Asset
            Marketplace with ReactJS. This included implementation of designs
            with Ant Design from given figma designs, writing logic for data
            handling, authentication, controlling interfaces according to
            different users, state management and API handling was done with
            redux-toolkit and redux-saga. Designed pages and components with
            pixel perfection, responsive for all devices and cross browser
            compatibility following Figma designs. Implemented mechanism for
            supporting multiple languages for the whole website since
            react-i18next tools was used for translations.
          </Typography>
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ fontWeight: "600" }}>
            Online Computer Based Testing
          </Typography>
          <Typography>
            Worked in Research and Development team of an Online Computer Based
            Testing project. Found the best suitable folder structure for React
            based front-end development. Also researched about test driven
            development process with JEST for the project. I was involved in
            designing the database using MongoDB for the project. Developed demo
            API using NodeJS and ExpressJS. Managed important documents and work
            breakdown sheet for the project and have written project
            functionalities, designed demo user interfaces(UI) for the project.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
