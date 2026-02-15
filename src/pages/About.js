import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import FilledButton from "../components/FilledButton";
import ImageCard from "../components/ImageCard";
import { Container } from "@mui/system";

export default function About() {
  return (
    <Typography>
      <Container>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{px: 4, textAlign: 'center'}}>
          <Typography variant="body" sx={{ pb: 3,}}>
            Welcome to Kinect Chiropractic
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', pb: 5, }}>
            Unlock Your Wellness Journey.
          </Typography>
          <FilledButton buttonText="Book An Appointment" onClick={() => {window.location.href = "/book-appointment"}}/>
        </Box>
        <img src="images/sample1.jpeg" alt="Network Spinal Analysis" style={{ width: "100%", height: "auto" }} />
      </Box>
      <Box sx={{backgroundColor: "var(--dark-green)", py: 5}}>
        <Typography variant="header" sx={{ pb: 5, textAlign: "center" }}>
          About Dr. Corey Cultrera
        </Typography>
        <Box sx={{height: "100%", width: "100%", display: "flex", flexDirection: {xs: "column", md: "row"}, alignItems: "center", justifyContent: "center", px: "40px", gap: "50px"}}>
          <Box
            component="img"
            src="/images/corey_img.jpeg"
            alt="Dr. Corey Cultrera"
            sx={{
              height:{ xs: "250px", sm: "300px", xl: "450px" },
              objectFit: "cover",
            }}
          />
          <Typography variant="body">
            Dr. Corey Cultrera is a dedicated chiropractor committed to helping patients achieve optimal health and wellness through personalized care.
            His approach combines gentle techniques, modern chiropractic methods, and patient education to support spinal health, nervous system function, and overall well-being.
            <br/><br/>Dr. Corey’s passion for chiropractic care comes from personal experience. He was once a patient dealing with chronic pain and, after years of exploring different therapies
            and techniques, he was able to regain his health. This journey not only allowed him to return to exercising and playing as a goalie in hockey but also gave him deep empathy
            for people in pain and a strong motivation to help others live the lives they want and deserve—free from the limitations of pain and dysfunction.
            <br/><br/>He believes that every patient deserves individualized attention and a treatment plan tailored to their unique needs—whether it’s relieving pain, improving mobility,
            or enhancing overall health. Dr. Cultrera is committed to creating a welcoming, supportive environment where patients of all ages can feel comfortable and confident in their care.
            Outside the clinic, he enjoys staying active, exploring new wellness techniques, and helping others lead healthier, more balanced lives.
          </Typography>
        </Box>
      </Box>
      <Typography variant="header" sx={{pt:"50px", textAlign: "center"}}>
        Techniques Used
      </Typography>
      <Grid container spacing={3} justifyContent="center" pb="20px" px="20px">
        <Grid item xs={12} sm={6} md={4}>
          <ImageCard 
            image="images/network.jpeg"
            title="Network Spinal Analysis"
            description="This gentle technique uses light touches along the spine to send signals to the brain, helping the body release built-up tension in the spinal cord, nerves, muscles, and tendons. Patients may feel relaxed, experience deep breaths, muscle movement, or shifts in tension."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ImageCard 
            image="images/sample1.jpeg"
            title="Neuromechanical Impulse Adjusting"
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
      </Grid>
      <Box sx={{backgroundColor: "var(--dark-green)", height: "100%", width: "100%", display: "flex", flexDirection: {xs: "column", md: "row"}, alignItems: "center", justifyContent: "center", padding: "40px", gap: "50px"}}>
        <Box
            component="img"
            src="/images/placeholder.jpeg"
            alt="Dr. Corey Cultrera"
            sx={{
              height:{ xs: "250px", sm: "300px", xl: "450px" },
              objectFit: "cover",
            }}
          />
        <Box>
          <Typography variant="header" sx={{mb: 1}}>
            The Mission
          </Typography>
          <Typography variant="body">
            Our mission is to improve the health and quality of life of our community and families through personalized, 
            compassionate, and evidence-based chiropractic care. We focus on restoring balance to the body, relieving pain,
            and empowering patients with the knowledge and tools to live healthier, more active lives.
          </Typography>
        </Box>
      </Box>
      </Container>
    </Typography>
  );
}
