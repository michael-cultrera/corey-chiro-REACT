"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Carousel from "../components/Carousel";

const images = [
    { src: '../../images/placeholder1.jpg', alt: 'Slide 1' },
    { src: '../../images/placeholder2.jpg', alt: 'Slide 2' },
    { src: '../../images/placeholder3.jpg', alt: 'Slide 3' },
  ];

const handleScroll = () => {
  const targetElement = document.getElementById("intro-corey");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Home() {
  return (
    <Box
    sx={{
        px: 5,
        py: 5,
      }}>
      <Carousel images={images} />
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
          }}
        >
          <p className="text-xl text-center">Learn More</p>
          <KeyboardArrowDownIcon />
        </Button>
      </Box>
      <Box
        id="intro-corey"
        sx={{
          pt: 10,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: '100%',
          position: "relative",
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box
          component="img"
          src="/images/corey_img.jpeg"
          alt="Corey Cultrera"
          sx={{
            display: 'block',
            margin: 'auto',
            width: {xs: '200px', md: '250px'},
            height: 'auto',
            objectFit: 'contain'
          }}
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, quae
          necessitatibus! Omnis, laudantium. Delectus numquam at obcaecati, amet
          animi enim fuga tempora autem beatae nam voluptate ut provident
          excepturi eos! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ducimus saepe eligendi unde iste pariatur ratione similique non
          doloribus, minima expedita accusantium eveniet atque rerum magni, illo
          recusandae labore obcaecati vel.
        </p>
      </Box>
    </Box>
  );
}