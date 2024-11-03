"use client";

import * as React from "react";
import { Button, Box, Typography, Container } from "@mui/material";

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
        component="img"
        src="/images/home_page_photo.jpg"
        alt="Welcome!"
        sx={{
          height: 500,
          width: "100%",
          objectFit: "cover",
          opacity: 0.8,
          filter: "brightness(0.9)",
        }}
      />
      <Container>
        {/* <Box
          id="intro-corey"
          sx={{
            pt: 10,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            position: "relative",
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box
            component="img"
            src="/images/corey_img.jpeg"
            alt="Corey Cultrera"
            sx={{
              display: "block",
              margin: "auto",
              width: {xs: "150px", lg: "220px"},
              height: "auto",
              objectFit: "contain",
            }}
          />
          <Typography variant="body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, quae
            necessitatibus! Omnis, laudantium. Delectus numquam at obcaecati, amet
            animi enim fuga tempora autem beatae nam voluptate ut provident
            excepturi eos! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus saepe eligendi unde iste pariatur ratione similique non
            doloribus, minima expedita accusantium eveniet atque rerum magni, illo
            recusandae labore obcaecati vel.
          </Typography>
        </Box> */}
        <Box
          sx={{
            pt: 20,
            width: "100%",
            textAlign: "center",
          }}
        >
        <Button
            onClick={handleScroll}
            variant="outlined"
            sx={{
              flexDirection: "column",
              textTransform: "none",
              color: "var(--foreground-color)",
              borderRadius: "25px",
              borderColor: "var(--foreground-color)",
              '&:hover': {
                borderColor: "var(--foreground-color)",
              }
            }}
          >
            <Typography variant="body">Learn More</Typography>
          </Button>
          </Box>
        </Container>
      </Typography>
  );
}
