"use client";

import * as React from "react";
import { Button, Box, Typography, Container, Grid } from "@mui/material";
import ImageCard from "../components/ImageCard"; 

const handleScroll = () => {
  const targetElement = document.getElementById("techniques-used");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Home() {
  return (
    <Typography>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="/images/home_page_photo.jpg"
          alt="Home Page Image"
          sx={{
            height: "550px",
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
          <span style={{ fontSize: '40px' }}><br />Kinetic Chiropractic</span>
        </Typography>
      </Box>
      <Container>
        <Typography variant="header" id="techniques-used" sx={{pt:"20px", textAlign: "center"}}>
          Techniques Used
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ImageCard 
              image="images/sample1.jpeg"
              title="Network Spinal Analysis"
              description="This gentle technique uses light touches along the spine to send signals to the brain, helping the body release built-up tension in the spinal cord, nerves, muscles, and tendons. Patients may feel relaxed, experience deep breaths, muscle movement, or shifts in tension."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImageCard 
              image="images/sample1.jpeg"
              title="Neuromechanical Impulse Mechanical Adjusting"
              description="This technique uses a device to deliver precise thrusts to restricted joints, improving mobility and reducing pain caused by tension and poor body mechanics."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImageCard 
              image="images/sample1.jpeg"
              title="Myofascial Release"
              description="Myofascial Release relieves tight muscles through patient movements and practitioner guidance, similar to deep tissue massage but more targeted. Gua Sha tools may also be used to release muscle adhesions and realign tissues."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImageCard 
              image="images/sample1.jpeg"
              title="Therapeutic Ultrasound"
              description="Therapeutic ultrasound uses sound waves to break down scar tissue from injuries or strain. The vibrations create heat, boosting blood flow and aiding the body’s natural healing process."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImageCard 
              image="images/sample1.jpeg"
              title="Exercise Prescription"
              description="Exercise prescriptions help maintain alignment and stability after releasing tension, ensuring muscles fire correctly for efficient movement."
            />
          </Grid>
          {/* Try to add 1 more to make it even number */}
        </Grid>
        </Container>
        <Box sx={{backgroundColor: "var(--dark-green)", height: "100%", width: "100%", display: "flex", flexDirection: {xs: "column", md: "row"}, alignItems: "center", justifyContent: "center", padding: "40px", gap: "50px"}}>
          <Box
              component="img"
              src="/images/corey_img.jpeg"
              alt="Dr. Corey Cultrera"
              sx={{
                height:{ xs: "250px", sm: "300px", xl: "450px" },
                objectFit: "cover",
              }}
            />
          <Box>
            <Typography variant="header" sx={{mb: 2}}>
              Meet Dr. Corey Cultrera
            </Typography>
            <Typography variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Typography>
          </Box>
      </Box>
      <Container>
      <Typography variant="header" sx={{pt:"20px", textAlign: "center"}}>
          Conditions Treated Here
        </Typography>
      </Container>
    </Typography>
  );
}

