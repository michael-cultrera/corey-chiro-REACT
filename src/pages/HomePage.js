"use client";

import { Box, Typography, Container, Grid, Paper, Stack, ButtonBase } from "@mui/material";
import FilledButton from "../components/FilledButton";
import OutlinedButton from "../components/OutlinedButton";
import TestimonialsCarousel from "../components/TestimonialsCarousel";


export default function Home() {
  return (
    <Typography>
      <Container>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="/images/landing.png"
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
          <span style={{ fontSize: '40px' }}><br />Kinect Chiropractic</span><br /><br />
          <FilledButton buttonText="Book An Appointment" onClick={() => {window.location.href = "/book-appointment"}}/>
        </Typography>
      </Box>
      <Box sx={{ mt: 3, mb: 6 }}>
        <Container>
          <Box sx={{ maxWidth: 960, mx: "auto", textAlign: "center", px: 2 }}>
            <Typography variant="header" sx={{ fontWeight: 700, mb: 1 }}>
              Providing Personalized Care Built Around Your Goals
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              At Kinect Chiropractic we combine gentle hands-on treatment, targeted rehabilitation, and practical tips so you can get back to the things you love — faster.
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                { title: "Our Services", icon: "/images/services.jpg", nav: "/services" },
                { title: "New Patients", icon: "/images/new_patients.jpg", nav: "/patient-forms" },
                { title: "Contact Us", icon: "/images/contact.jpg", nav: "/contact-us" },
              ].map((item) => (
                <Grid item xs={12} sm={4} key={item.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      minHeight: 110,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      bgcolor: "transparent",
                      borderRadius: 1,
                      textAlign: "center",
                    }}
                  >
                    <ButtonBase
                      onClick={() => window.location.href = item.nav}
                      aria-label={`Learn more about ${item.title}`}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transition: "color 0.2s",
                        "&:hover": { color: "var(--dark-green)" },
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.title ?? ""}
                        sx={{
                          width: 180,
                          height: 180,
                          borderRadius: "10px",
                          overflow: "hidden",
                          objectFit: "cover",
                          display: "block",
                          mb: 1.5,
                        }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                    </ButtonBase>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Stack direction="row" spacing={2} justifyContent="center">
              <FilledButton
                buttonText="Book An Appointment"
                onClick={() => (window.location.href = "/book-appointment")}
              />
              <OutlinedButton
                buttonText="Learn More"
                fontColor={"#093C5D"}
                fontColorHover={"#F7FAFA"}
                borderColor={"#093C5D"}
                onClick={() => (window.location.href = "/about")}
              />
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box sx={{ my: 8, bgcolor: "var(--dark-green)", py: 6 }}>
        <Container>
          <Box sx={{ maxWidth: 1000, mx: "auto", textAlign: "center", px: 2 }}>
            <Typography variant="header" sx={{ mb: 1, color: "#F7FAFA" }}>
              Conditions We Commonly Treat
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {[
                {label: "Back Pain", icon: "images/back_pain.png"},
                {label: "Neck Pain", icon: "/images/neck_pain.png"},
                {label: "Headaches & Migraines", icon: "/images/headache.png"},
                {label: "Plantar Fasciitis", icon: "/images/plantar_fasciitis.png"},
                {label: "Sports Injuries", icon: "/images/sports_injuries.png"},
                {label: "Postural Strain", icon: "/images/posture.png"},
                {label: "Shoulder Pain", icon: "/images/shoulder_pain.png"},
                {label: "Knee Pain", icon: "/images/knee_pain.png"},
              ].map((condition) => (
                <Grid item xs={6} sm={4} md={3} key={condition.label}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    py: 1.5,
                    px: 2,
                    borderRadius: "30px",
                    fontSize: 14,
                    fontWeight: 500,
                    bgcolor: "#3B7597",
                    color: "#F7FAFA"
                  }}
                >
                  <Box
                    component="img"
                    src={condition.icon}
                    alt={condition.label}
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="body">{condition.label}</Typography>
                </Box>
              </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <TestimonialsCarousel/>
      </Container>
    </Typography>
  );
}

