"use client";

import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Box, Typography, Container } from "@mui/material";
import Carousel from "../components/Carousel";

const images = [
  { src: "../../images/placeholder1.jpg", alt: "Slide 1" },
  { src: "../../images/placeholder2.jpg", alt: "Slide 2" },
  { src: "../../images/placeholder3.jpg", alt: "Slide 3" },
];

const handleScroll = () => {
  const targetElement = document.getElementById("intro-corey");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Home() {

  return (
    <Container>
      <Typography>
        <Carousel images={images} width={"700px"} />
        <Box
          sx={{
            pt: 20,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            onClick={handleScroll}
            sx={{
              flexDirection: "column",
              textTransform: "none",
              color: "var(--foreground-color)",
              fontFamily: "var(--urbanist-font)",
              fontSize: { xs: "14px", md: "20px", lg: "22px" },
            }}
          >
            <Typography variant="body">Learn More</Typography>
            <KeyboardArrowDownIcon />
          </Button>
        </Box>
        <Box
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
        </Box>
      </Typography>
    </Container>
  );
}
