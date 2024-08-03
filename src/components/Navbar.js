import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";


export default function Navbar() {
  return (
    <Box
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
        width: "100%",
        height: {xs: 50, md: 70},
        bgcolor: "var(--navbar-color)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: {xs: "space-evenly", md:"flex-end"},
          alignItems: "center",
          width: "100%",
          gap: {md: 4},
          pr: {md: 4},
          fontSize: {xs:'14px', md:'20px',},
        }}
      >
        <Link
          href="/"
          sx={{
            // height: "100%",
            color: "var(--foreground-color)",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          sx={{
            color: "var(--foreground-color)",
            textDecoration: "none",
          }}
        >
          About Us
        </Link>
        <Link
          href="#"
          sx={{
            color: "var(--foreground-color)",
            textDecoration: "none",
          }}
        >
          Patient Forms
        </Link>
        <Link
          href="/contact-us"
          sx={{
            color: "var(--foreground-color)",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Link>
        <Link
          href="#"
          sx={{
            color: "var(--foreground-color)",
            textDecoration: "none",
          }}
        >
          Hours
        </Link>
      </Box>
    </Box>
  );
}