import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FilledButton from "../components/FilledButton";
import OutlinedButton from "../components/OutlinedButton";

export default function TestimonialsCarousel() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm")); // >=600
  const md = useMediaQuery(theme.breakpoints.up("md")); // >=900
  const visibleCount = md ? 3 : sm ? 2 : 1;

  const containerRef = useRef(null);
  const autoRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);

  // AUTO SCROLL INTERVAL (shorter => more frequent)
  const AUTO_SCROLL_MS = 1000; // 1000ms = 1s; change as desired
  const RESUME_AFTER_MS = 1500; // resume after user stops interacting

  const testimonials = [
    {
      text:
        "I had persistent neck pain for years — after a few sessions I noticed a huge difference. Friendly staff and real results.",
      name: "Sarah M.",
      role: "Runner",
      avatar: "/images/testimonial1.jpg",
      rating: 5,
    },
    {
      text:
        "Professional and gentle. They explained everything and gave me exercises I still use. Highly recommend!",
      name: "David L.",
      role: "Warehouse Supervisor",
      avatar: "/images/testimonial2.jpg",
      rating: 5,
    },
    {
      text:
        "Great experience — booking was simple and the receptionist was kind. The treatments actually helped my plantar fasciitis.",
      name: "Jasmine K.",
      role: "Teacher",
      avatar: "/images/testimonial3.jpg",
      rating: 4,
    },
    {
      text:
        "Great experience — booking was simple and the receptionist was kind. The treatments actually helped my plantar fasciitis.",
      name: "Jasmine K.",
      role: "Teacher",
      avatar: "/images/testimonial3.jpg",
      rating: 4,
    },
    {
      text:
        "Great experience — booking was simple and the receptionist was kind. The treatments actually helped my plantar fasciitis.",
      name: "Jasmine K.",
      role: "Teacher",
      avatar: "/images/testimonial3.jpg",
      rating: 4,
    },
  ];

  // compute approximate card width based on container and visible count
  const getCardWidth = () => {
    const el = containerRef.current;
    if (!el) return 0;
    return el.clientWidth / visibleCount;
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    autoRef.current = setInterval(() => {
      const el = containerRef.current;
      if (!el) return;
      const cardWidth = getCardWidth();
      // if at end -> jump to start for simpler looping
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, AUTO_SCROLL_MS);
  };

  const stopAutoScroll = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  const pause = (temporary = true) => {
    setIsPaused(true);
    stopAutoScroll();
    if (temporary) {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, RESUME_AFTER_MS);
    }
  };

  useEffect(() => {
    if (!isPaused) startAutoScroll();
    return () => stopAutoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, visibleCount]);

  useEffect(() => {
    return () => {
      stopAutoScroll();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // interaction handlers
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onEnter = () => pause(true);
    const onPointerDown = () => {
      pause(false); // pause until pointer up
    };
    const onPointerUp = () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), RESUME_AFTER_MS);
    };
    const onScroll = () => pause(true);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("scroll", onScroll);
    };
  }, [visibleCount]);

  // arrow controls
  const scrollByCard = (direction = "next") => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    const shift = direction === "next" ? cardWidth : -cardWidth;
    el.scrollBy({ left: shift, behavior: "smooth" });
    // Pause briefly after arrow click
    pause(true);
  };

  return (
    <Box sx={{ my: 8, position: "relative" }}>
      <Container>
        <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
          <Typography variant="header" sx={{ mb: 1, textAlign: "center" }}>
            What Our Patients Say
          </Typography>
          <Typography variant="body" sx={{ color: "text.secondary", mb: 4, textAlign: "center" }}>
            Real feedback from patients who came to us for relief and got back to the activities they love.
          </Typography>

          {/* Left arrow */}
          <IconButton
            aria-label="scroll left"
            onClick={() => scrollByCard("prev")}
            sx={{
              position: "absolute",
              left: { xs: 8, sm: 12 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              "&:hover": { bgcolor: "var(--dark-green)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Right arrow */}
          <IconButton
            aria-label="scroll right"
            onClick={() => scrollByCard("next")}
            sx={{
              position: "absolute",
              right: { xs: 8, sm: 12 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              "&:hover": { bgcolor: "var(--dark-green)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Horizontal scroll container */}
          <Box
            ref={containerRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              pb: 1,
              mt: 1,
              "&::-webkit-scrollbar": { height: 10 },
            }}
            role="list"
            aria-label="Patient testimonials carousel"
            tabIndex={0}
          >
            {testimonials.map((t, i) => (
              <Paper
                key={i}
                role="listitem"
                elevation={1}
                tabIndex={0}
                sx={{
                  bgcolor: "var(--light-green)",
                  scrollSnapAlign: "start",
                  flex: "0 0 auto",
                  width: { xs: "92%", sm: "48%", md: `calc((100% - ${2 * 16}px) / 3)` },
                  p: 2,
                  borderRadius: 2,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, fontStyle: "italic" }}>
                    “{t.text}”
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "auto" }}>
                    <Box
                      component="img"
                      src={t.avatar}
                      alt={t.name}
                      sx={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                        {t.role}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {Array.from({ length: t.rating }).map((_, j) => "★").join("")}
                        {Array.from({ length: 5 - t.rating }).map((_, j) => "☆").join("")}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <FilledButton buttonText="Book An Appointment" onClick={() => (window.location.href = "/book-appointment")} />
            <OutlinedButton buttonText="Read More Reviews" onClick={() => (window.location.href = "/about")} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
