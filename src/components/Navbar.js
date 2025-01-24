import * as React from "react";
import { useState, useEffect } from "react";
import { IconButton, Typography, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
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
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
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
          position: "relative",
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
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            {menuOpen ? <CloseIcon/> : <MenuIcon />}
          </IconButton>
        )}
        {(menuOpen || !isMobile) && (
          <Box
            id="navbar-links"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-end", md: "center" },
              position: { xs: "absolute", md: "static" },
              top: { xs: "90px", md: "auto" },
              right: { xs: 0, md: "auto" },
              bgcolor: { xs: "var(--navbar-color)", md: "transparent" },
              width: { xs: "200px", md: "auto" },
              padding: { xs: 2, md: 0 },
              gap: { xs: 2, md: 4 },
              marginLeft: { xs: 0, md: "auto" },
              pr: { xs: 3, md: 4 },
              zIndex: 1000,
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
            <OutlinedButton buttonText={"Contact"} onClick={() => window.location.href = "/contact-us"}/>
          </Box>
        )}
      </Box>
    </Typography>
  );
}
