"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

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
      }}>
      <p className="text-7xl text-center pt-20">Dr. Corey Cultrera</p>
      <p className="text-2xl text-center pt-5">Network Spinal Analysis</p>

      <Box
        sx={{
          pt: 40,
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
            width: {xs: '300px', },
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