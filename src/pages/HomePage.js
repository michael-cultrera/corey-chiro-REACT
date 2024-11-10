"use client";

import * as React from "react";
import { Button, Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";

const handleScroll = () => {
  const targetElement = document.getElementById("intro-corey");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Home() {
  return (
    <Typography>
      <Box
        sx={{
          minHeight:"100vh"
        }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="/images/home_page_photo.jpg"
          alt="Home Page Image"
          sx={{
            height: "600px",
            width: "100%",
            objectFit: "cover",
            opacity: 0.8,
            filter: "brightness(0.9)",
          }}
        />
        <Typography
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '30px',
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          <span style={{ fontSize: '22px' }}>Welcome to</span>
          <span style={{ fontSize: '40px' }}><br />Cor's Chiropractic Clinic</span>
        </Typography>
      </Box>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            pt: "50px"
          }}
        >
          <Button
            onClick={handleScroll}
            variant="outlined"
            sx={{
              flexDirection: "column",
              textTransform: "none",
              color: "black",
              borderRadius: "10px",
              borderColor: "black",
              width: "180px",
              '&:hover': {
                borderColor: "var(--dark-green)",
                backgroundColor: "var(--dark-green)",
                color: "var(--honeydew)"
              }
            }}
          >
            <Typography variant="body">Learn More</Typography>
          </Button>
        </Box>
      </Box>
      <Container>
        <Typography variant="header">
          Techniques Used
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '250px', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--light-green)' }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              >
              </CardMedia>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Network Spinal Analysis
                </Typography>
                <Typography variant="body">
                This is a gentle technique that uses light contacts along the spine. These specific light touches send a message up to the brain and back down to the body. The body begins to further communicate to reconfigure itself and learn how to release built up tension within the spinal cord, nerves, muscles and tendons. Release of tension during treatment can be experienced as a deep breath, total body relaxation, muscle movement, as well as a build up or release of tension in other areas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Card sx={{ height: '250px', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Thompson Technique
                </Typography>
                <Typography variant="body">
                  A technique using a special drop table that helps facilitate the adjustment and makes it more comfortable for patients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Activator Method
                </Typography>
                <Typography variant="body">
                  A gentle, low-force approach that uses a small, hand-held instrument to deliver precise adjustments to the vertebrae and joints.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Soft Tissue Therapy
                </Typography>
                <Typography variant="body">
                  Manual therapy techniques applied to muscles, tendons and ligaments to reduce pain, improve mobility and promote healing.
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </Container>
    </Typography>
  );
}
