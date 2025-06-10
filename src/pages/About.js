import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";

export default function About() {
  return (
    <Typography>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{px: 4, textAlign: 'center'}}>
          <Typography variant="h4" sx={{ mb: 5,}}>
            Welcome to Kinect Chiropractic
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', pb: 5}}>
            Unlock Your Wellness Journey Today.
          </Typography>
          <Button
            onClick={() => {window.location.href = "/book-appointment"}}
            variant="outlined"
            sx={{
              height: "50px",
              flexDirection: "column",
              textTransform: "none",
              color: "white",
              backgroundColor: "var(--dark-green)",
              borderRadius: "20px",
              borderColor: "var(--dark-green)",
              transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
              '&:hover': {
              borderColor: "black",
              backgroundColor: "black",
              color: "var(--honeydew)",
              },
          }}
        >
            <Typography variant="body">{"Book An Appointment"}</Typography>
        </Button>
        </Box>
        <img src="images/sample1.jpeg" alt="Network Spinal Analysis" style={{ width: "100%", height: "auto" }} />
      </Box>
    </Typography>
  );
}
