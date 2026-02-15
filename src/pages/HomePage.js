"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import ImageCard from "../components/ImageCard";
import FilledButton from "../components/FilledButton";

export default function Home() {
  return (
    <Typography>
      <Container>
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
          <span style={{ fontSize: '40px' }}><br />Kinect Chiropractic</span><br /><br />
          <FilledButton buttonText="Book An Appointment" onClick={() => {window.location.href = "/book-appointment"}}/>
        </Typography>
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

