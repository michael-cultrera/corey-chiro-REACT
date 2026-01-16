import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import FilledButton from "../components/FilledButton";

export default function About() {
  return (
    <Typography>
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
    </Typography>
  );
}
