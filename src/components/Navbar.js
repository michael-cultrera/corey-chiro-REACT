import * as React from "react";
import { useState, useEffect } from "react";
import { IconButton, Typography, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import OutlinedButton from "./OutlinedButton";

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
          // justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: 90,
          bgcolor: "var(--navbar-color)",
        }}
      >
        <Box sx={{
          pl: 2,
          display: "flex",
          alignItems: "center"
        }}>
          <Logo width="120px" />
        </Box>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
            sx={{
              justifyContent: "center",
              height: "100%"
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
              justifyContent: "flex-end",
              alignItems: "center",
              gap: { xs: 1, md: 4 },
              pr: { md: 4 },
              marginLeft: "auto",
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
            <OutlinedButton buttonText={"Contact"}/>
          </Box>
        )}
      </Box>
    </Typography>
  );
}
