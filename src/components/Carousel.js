import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
