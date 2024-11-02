import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ images, width }) {
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
    <Slider {...settings}>
      {images.map((image, index) => (
        <Box key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: width,
              display: "block",
              margin: "0 auto",
            }}
          />
        </Box>
      ))}
    </Slider>
  );
}
