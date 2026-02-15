import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Link,
  Collapse,
  ClickAwayListener,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";
import OutlinedButton from "./OutlinedButton";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/patient-forms", label: "Patient Forms" },
  { href: "/book-appointment", label: "Book An Appointment" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:920px)");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleToggle = useCallback(() => setMenuOpen((s) => !s), []);
  const handleClose = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = (href) => (e) => {
    handleClose();
    window.location.href = href;
  };

  if (isMobile) {
    return (
      <ClickAwayListener onClickAway={handleClose}>
        <Box
          component="header"
          sx={{
            position: "relative",
            width: "100%",
            bgcolor: "var(--navbar-color)",
            zIndex: theme.zIndex.appBar || 1200,
          }}
        >
          <Container maxWidth="lg" sx={{ p: 0 }}>
            <Box
              sx={{
                height: 90,
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 2,
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Logo width="120px" />
              </Box>

              <IconButton
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle();
                }}
                sx={{
                  marginLeft: "auto",
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "inherit",
                }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Container>

          <Collapse
            in={menuOpen}
            timeout="auto"
            sx={{
              position: "absolute",
              top: "90px",
              right: 0,
              bgcolor: "var(--navbar-color)",
              zIndex: (theme.zIndex.appBar || 1200) + 1,
              borderTop: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <Box
              id="mobile-navigation"
              sx={{
                px: 3,
                py: 2,
              }}
            >
              <Stack direction="column" spacing={2} alignItems="flex-end">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    onClick={handleNavClick(href)}
                    underline="none"
                    sx={{
                      color: "var(--foreground-color)",
                      transition: "color 0.2s",
                      "&:hover": { color: "var(--honeydew)" },
                      width: "100%",
                      textAlign: "right",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="body1">{label}</Typography>
                  </Link>
                ))}

                <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                  <OutlinedButton
                    buttonText={"Contact"}
                    onClick={() => {
                      handleClose();
                      window.location.href = "/contact-us";
                    }}
                  />
                </Box>
              </Stack>
            </Box>
          </Collapse>
        </Box>
      </ClickAwayListener>
    );
  }

  // Desktop layout
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        width: "100%",
        bgcolor: "var(--navbar-color)",
        zIndex: theme.zIndex.appBar || 1200,
      }}
    >
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <Box
          sx={{
            height: 90,
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: 2,
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo width="120px" />
          </Box>

          <Stack
            direction="row"
            spacing={4}
            sx={{ marginLeft: "auto", alignItems: "center" }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                underline="none"
                sx={{
                  color: "var(--foreground-color)",
                  transition: "color 0.2s",
                  "&:hover": { color: "var(--honeydew)" },
                  cursor: "pointer",
                }}
              >
                <Typography variant="body1">{label}</Typography>
              </Link>
            ))}

            <OutlinedButton
              buttonText={"Contact"}
              onClick={() => (window.location.href = "/contact-us")}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
