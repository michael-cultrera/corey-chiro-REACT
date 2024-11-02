import React from "react";
import { Box, Typography, Container } from "@mui/material";
import MapBoxMap from "../components/MapBoxMap";
import GetInTouch from "../components/GetInTouch";

export default function ContactUs() {
  return (
    <Container>
      <Typography>
        <Typography variant="header">Location</Typography>
        <Typography variant="body">68 Shaughnessy Blvd, North York, ON M2J 1J3</Typography>
        <MapBoxMap />
        <Box
          sx={{
            pt: 5,
            display: { xs: "block", md: "flex" },
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography variant="header">Hours of Operation</Typography>
            <Typography variant="body" sx={{ pb: 1 }}>Monday - Friday: 9:00 AM - 5:00 PM</Typography>
            <Typography variant="body" sx={{ pb: 1 }}>Saturday: 9:00 AM - 1:00 PM</Typography>
            <Typography variant="body">Sunday: Closed</Typography>
          </Box>
          <Box>
            <Typography variant="header">Contact Info</Typography>
            <Typography variant="body" sx={{ pb: 1 }}>
              Phone:{" "}
              <a href="tel:416-497-8585" style={{ color: "var(--link-color)" }}>
                416-497-8585
              </a>
            </Typography>
            <Typography variant="body">
              Email:{" "}
              <a
                href="mailto:corey.cultrera@gmail.com"
                style={{ color: "var(--link-color)" }}
              >
                dr.coreycultrera@gmail.com
              </a>
            </Typography>
          </Box>
        </Box>
        <GetInTouch />
      </Typography>
    </Container>
  );
}
