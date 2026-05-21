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
        "Dr. Corey is able to sort through my anecdotal isuues and what he feels in my body, to provide effective chiropractic and physiotherapeutic therapies to keep me flexible and balanced. He incorporates a toolbox of technologies in his office to provide the best-established approach for remedy. I highly recommend Dr. Corey.",
      name: "David Rayburn",
      avatar: "/review_avatars/david.png",
      rating: 5,
    },
    {
      text:
        "Dr Corey is amazing. He has helped me with my back issues and I have no complaints. Highly recommend him.",
      name: "SASAces",
      avatar: "/review_avatars/sasaces.png",
      rating: 5,
    },
    {
      text:
        "Dr. Cultrera is very knowledgeable and passionate about his profession. He is a kind and compassionate doctor who truly cares about his patients. He has helped me with my knee, back and shoulder pain. I would highly recommend him to anyone.",
      name: "Rosa Scoddo-Sessa",
      avatar: "/review_avatars/rose.png",
      rating: 5,
    },
    {
      text:
        "Dr Corey Cultrera and his staff are amazing. A very professional, friendly, and welcoming office. I highly recommend him for your back issues.",
      name: "Tier One Armament",
      avatar: "/review_avatars/tier one.png",
      rating: 5,
    },
    {
      text:
        "Awesome service, courteous and knowledgeable. Highly recommend!!",
      name: "Nana Lee",
      avatar: "/review_avatars/nana.png",
      rating: 5,
    },
    {
      text:
        "Had major back issues and Corey and his staff solved my issues within 2 visits. Professional and clean.",
      name: "Domenic Vigliatore",
      avatar: "/review_avatars/dom.png",
      rating: 5,
    },
    {
      text:
        "Had pain after running a half marathon. Came to see Dr. Corey and felt great after. The office is very clean and well organized as well.",
      name: "giancarlo sessa",
      avatar: "/review_avatars/giancarlo.png",
      rating: 5,
    },
    {
      text:
        "I always feel immediate relief, followed by general improvement over the following days and weeks. It's great help, I highly recommend Dr. Corey and the Kinect Wellness Clinic.",
      name: "Balloon Buster",
      avatar: "/review_avatars/balloon.png",
      rating: 5,
    },
    {
      text:
        "Dr. Corey blends the best of classic and modern chiropractic techniques, along with sports injury rehab and smart tools/devices.",
      name: "KB",
      avatar: "/review_avatars/kb.png",
      rating: 5,
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
  }, [visibleCount, pause]);

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
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
