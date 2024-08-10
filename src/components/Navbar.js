import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNotMobile, setIsNotMobile] = useState(false);

  // For hamburger menu on mobile screens
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // keep track of when screen is mobile
  useEffect(() => {
    const handleResize = () => {
      const notMobile = window.matchMedia("(min-width: 768px)").matches;
      setIsNotMobile(notMobile);
      setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: menuOpen ? { xs: 200, md: 70 } : { xs: 40, md: 70 },
        bgcolor: "var(--navbar-color)",
        fontSize: { xs: "14px", md: "20px" },
      }}
    >
      {!isNotMobile && (
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
      {(menuOpen || isNotMobile) && (
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
            }}
          >
            Home
          </Link>
          <Link
            href="/about"
            sx={{
              color: "var(--foreground-color)",
              textDecoration: "none",
            }}
          >
            About
          </Link>
          <Link
            href="/patient-forms"
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
            Contact
          </Link>
          <Link
            href="/book-appointment"
            sx={{
              color: "var(--foreground-color)",
              textDecoration: "none",
            }}
          >
            Book An Appointment
          </Link>
        </Box>
      )}
    </Box>
  );
}
