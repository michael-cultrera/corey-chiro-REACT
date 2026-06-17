import React from "react";
import { Box, Typography, Container } from "@mui/material";
import MapBoxMap from "../components/MapBoxMap";
import GetInTouch from "../components/GetInTouch";

export default function ContactUs() {
  return (
    <Container>
      <Typography>
        <Box sx={{px: "20px", pt: "20px"}}>
          <Typography variant="header">Our Office</Typography>
          <Typography variant="body">
            <a href="https://maps.google.com/maps?q=2942+Finch+Ave+E+unit+117+2nd+floor,+Toronto,+ON+M1W+2T4" target="_blank" rel="noopener noreferrer" style={{ color: "#3B7597" }}>
              2942 Finch Ave E unit 117 2nd floor, Toronto, ON M1W 2T4
            </a>
          </Typography>
          <MapBoxMap />
        </Box>
        <Box
          sx={{
            pt: 5,
            display: { xs: "block", md: "flex" },
            px: { xs: "20px" },
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ pb: { xs: 4, md: 0 } }}>
            <Typography variant="header">Hours of Operation</Typography>
            <Box sx={{ display: 'flex', gap: 3, width: "180px"}}>
              <Box>
                  <Typography variant="body" sx={{ pb: 1 }}>Monday:</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>Tuesday:</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>Wednesday:</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>Thursday:</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>Friday:</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>Saturday:</Typography>
                  <Typography variant="body">Sunday</Typography>
              </Box>
              <Box sx={{ whiteSpace: 'nowrap'}}>
                  <Typography variant="body" sx={{ pb: 1 }}>Closed</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>9:45 AM - 4:00 PM</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>Closed</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>9:45 AM - 6:00 PM</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>9:45 AM - 4:00 PM</Typography>
                  <Typography variant="body" sx={{ pb: 1 }}>9:30 AM - 3:00 PM</Typography>
                  <Typography variant="body">Closed</Typography>
              </Box>
          </Box>
        </Box>
          <Box sx={{ pb: { xs: 4, md: 0 } }}>
            <Typography variant="header">Contact Info</Typography>
            <Typography variant="body" sx={{ pb: 1 }}>
              Phone:{" "}
              <a href="tel:416-497-8585" style={{ color: "#3B7597" }}>
                416-497-8585
              </a>
            </Typography>
            <Typography variant="body">
              Email:{" "}
              <a
                href="mailto:corey.cultrera@gmail.com"
                style={{ color: "#3B7597" }}
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
