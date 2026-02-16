"use client";

import { Box, Typography, Container, Grid, Paper, Stack, ButtonBase } from "@mui/material";
import FilledButton from "../components/FilledButton";
import OutlinedButton from "../components/OutlinedButton";


export default function Home() {
  return (
    <Typography>
      <Container>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="/images/home_page_photo.png"
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
                        width: 180,
                        height: 180,
                        borderRadius: "10px",
                        overflow: "hidden",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1.5,
                        bgcolor: "background.paper",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.title ?? ""}
                        sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </ButtonBase>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
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
                onClick={() => (window.location.href = "/about")}
              />
            </Stack>
          </Box>
        </Container>
      </Box>
<Box sx={{ my: 8, bgcolor: "var(--dark-green)", py: 6 }}>
  <Container>
    <Box sx={{ maxWidth: 1000, mx: "auto", textAlign: "center", px: 2 }}>
      <Typography variant="header" sx={{ mb: 1 }}>
        Conditions We Commonly Treat
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
        Whether you're dealing with chronic discomfort or a recent injury, 
        we provide personalized care designed to restore movement and reduce pain.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {[
          {label: "Back Pain", icon: "/images/back_pain.png"},
          {label: "Neck Pain", icon: "/images/neck_pain.png"},
          {label: "Headaches & Migraines", icon: "/images/headaches_migraines.png"},
          {label: "Sciatica", icon: "/images/sciatica.png"},
          {label: "Sports Injuries", icon: "/images/sports_injuries.png"},
          {label: "Postural Strain", icon: "/images/postural_strain.png"},
          {label: "Shoulder Pain", icon: "/images/shoulder_pain.png"},
          {label: "Knee Pain", icon: "/images/knee_pain.png"},
        ].map((condition) => (
          <Grid item xs={6} sm={4} md={3} key={condition}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                py: 1.5,
                px: 2,
                borderRadius: "30px",
                border: "1px solid",
                borderColor: "grey.300",
                fontSize: 14,
                fontWeight: 500,
                bgcolor: "white",
              }}
            >
              <condition.icon size={18} strokeWidth={1.5} />
              {condition.label}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <FilledButton
          buttonText="See All Services"
          onClick={() => (window.location.href = "/services")}
        />
      </Box>
    </Box>
  </Container>
</Box>

      <Typography variant="header" sx={{pt:"80px", textAlign: "center"}}>
        Conditions Treated
      </Typography>
      <Grid container spacing={3} justifyContent="center" pb="20px" px="20px">
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ position: "relative" }}>
              <img src="images/sample1.jpeg" alt="Network Spinal Analysis" style={{ width: "100%", height: "auto" }} />
              <Box sx={{ position: "absolute", bottom: 0, left: 0, color: "white", padding: "10px" }}>
                <Typography variant="h4">Back Pain</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ position: "relative" }}>
              <img src="images/sample1.jpeg" alt="Network Spinal Analysis" style={{ width: "100%", height: "auto" }} />
              <Box sx={{ position: "absolute", bottom: 0, left: 0, color: "white", padding: "10px" }}>
                <Typography variant="h4">Joint Pain</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ position: "relative" }}>
              <img src="images/sample1.jpeg" alt="Network Spinal Analysis" style={{ width: "100%", height: "auto" }} />
              <Box sx={{ position: "absolute", bottom: 0, left: 0, color: "white", padding: "10px" }}>
                <Typography variant="h4">Stress</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ position: "relative" }}>
              <img src="images/sample1.jpeg" alt="Network Spinal Analysis" style={{ width: "100%", height: "auto" }} />
              <Box sx={{ position: "absolute", bottom: 0, left: 0, color: "white", padding: "10px" }}>
                <Typography variant="h4">Neck Pain</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      {/* <Grid container spacing={14} sx={{pt: "20px", pb: "20px"}}>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" style={{backgroundColor: "transparent"}}>
            <img src="/conditions/back-pain.png" alt="Back Pain" style={{width: "100%", height: "auto"}} />
          </Button>
          <Typography variant="body" sx={{pt:"20px", textAlign: "center"}}>
            Back Pain
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" style={{backgroundColor: "transparent"}}>
            <img src="/conditions/broken-bone.png" alt="Joint pain" style={{width: "100%", height: "auto"}} />
          </Button>
          <Typography variant="body" sx={{pt:"20px", textAlign: "center"}}>
            Joint Pain
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" style={{backgroundColor: "transparent"}}>
            <img src="/conditions/depression.png" alt="Stress" style={{width: "100%", height: "auto"}} />
          </Button>
          <Typography variant="body" sx={{pt:"20px", textAlign: "center"}}>
            Stress
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" style={{backgroundColor: "transparent"}}>
            <img src="/conditions/neck.png" alt="Neck Pain" style={{width: "100%", height: "auto"}} />
          </Button>
          <Typography variant="body" sx={{pt:"20px", textAlign: "center"}}>
            Neck Pain
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" style={{backgroundColor: "transparent"}}>
            <img src="/conditions/shoulder.png" alt="Frozen Shoulder" style={{width: "100%", height: "auto"}} />
          </Button>
          <Typography variant="body" sx={{pt:"20px", textAlign: "center"}}>
            Frozen Shoulder
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" style={{backgroundColor: "transparent"}}>
            <img src="/conditions/foot.png" alt="Plantar Fasciitis" style={{width: "100%", height: "auto"}} />
          </Button>
          <Typography variant="body" sx={{pt:"20px", textAlign: "center"}}>
            Plantar Fasciitis
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" style={{backgroundColor: "transparent"}}>
            <img src="/conditions/office-syndrome.png" alt="Poor Posture" style={{width: "100%", height: "auto"}} />
          </Button>
          <Typography variant="body" sx={{pt:"20px", textAlign: "center"}}>
            Poor Posture
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" style={{backgroundColor: "transparent"}}>
            <img src="/conditions/scar-tissue.png" alt="Scar Tissue" style={{width: "100%", height: "auto"}} />
          </Button>
          <Typography variant="body" sx={{pt:"20px", textAlign: "center"}}>
            Scar Tissue
          </Typography>
        </Grid>
      </Grid> */}
      </Container>
    </Typography>
  );
}

