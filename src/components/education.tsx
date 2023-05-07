import { Box, Typography, IconButton, Link } from "@mui/material";

const Education = () => {
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
          Education
        </Typography>
      </Box>
      <Box>
        <Box>
          <Typography sx={{ fontSize: "20px" }}>
            BSc in Computer Science & Engineering
          </Typography>
          <Typography>
            Chittagong University of Engineering & Technology, Chattogram
          </Typography>
          <Typography> 2016 - 2021</Typography>
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ fontSize: "20px" }}>
            Higher Secondary Certificate (HSC)
          </Typography>
          <Typography>Rangpur Govt. College</Typography>
          <Typography>2013-2015</Typography>
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ fontSize: "20px" }}>
            Secondary School Certificate (SSC)
          </Typography>
          <Typography>Rangpur Zilla School</Typography>
          <Typography>2013-2015</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
