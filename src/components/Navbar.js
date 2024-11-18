import * as React from "react";
import { useState, useEffect } from "react";
import { IconButton, Typography, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // For hamburger menu on mobile screens
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // keep track of when screen is mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);
      setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Typography>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: menuOpen ? 200 : 60,
          bgcolor: "var(--navbar-color)",
        }}
      >
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
            sx={{
              justifyContent: "center",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {(menuOpen || !isMobile) && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "space-around", md: "flex-end" },
              alignItems: "center",
              width: "100%",
              gap: { xs: 1, md: 4 },
              pr: { md: 4 },
            }}
          >
            <Link
              href="/"
              sx={{
                color: "var(--foreground-color)",
                textDecoration: "none",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "var(--honeydew)"
                }
              }}
            >
              <Typography variant="body">Home</Typography>
            </Link>
            <Link
              href="/about"
              sx={{
                color: "var(--foreground-color)", 
                textDecoration: "none",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "var(--honeydew)"
                }
              }}
            >
              <Typography variant="body">About</Typography>
            </Link>
            <Link
              href="/patient-forms"
              sx={{
                color: "var(--foreground-color)",
                textDecoration: "none",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "var(--honeydew)"
                }
              }}
            >
              <Typography variant="body">Patient Forms</Typography>
            </Link>
            <Link
              href="/book-appointment"
              sx={{
                color: "var(--foreground-color)",
                textDecoration: "none",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "var(--honeydew)"
                }
              }}
            >
              <Typography variant="body">Book An Appointment</Typography>
            </Link>
            <Link
              href="/contact-us"
              sx={{
                color: "black",
                borderRadius: "10px",
                border: "1px solid black",
                width: "100px",
                textDecoration: "none",
                textAlign: "center",
                padding: "6px 16px",
                transition: "background-color 0.3s ease, color 0.3s ease",
                '&:hover': {
                  borderColor: "black",
                  backgroundColor: "black", 
                  color: "var(--dark-green)"
                }
              }}
            >
              <Typography variant="body">Contact</Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Typography>
  );
}
