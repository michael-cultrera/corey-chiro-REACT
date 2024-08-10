import React from "react";
import { Box } from "@mui/material";
import MapBoxMap from "../components/MapBoxMap";
import GetInTouch from "../components/GetInTouch";

export default function ContactUs() {
  return (
    <Box
      sx={{
        px: 5,
        py: 5,
      }}
    >
      <Box>
        <p className="text-2xl font-bold">Location</p>
        <p className="pt-5 pb-2">68 Shaughnessy Blvd, North York, ON M2J 1J3</p>
        <MapBoxMap />
      </Box>
      <Box
        sx={{
          pt: 5,
          display: { xs: "block", md: "flex" },
          justifyContent: "space-around",
        }}
      >
        <Box>
          <p className="text-2xl font-bold">Hours of Operation</p>
          <p className="pt-5 pb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p className="pb-2">Saturday: 9:00 AM - 1:00 PM</p>
          <p className="pb-2">Sunday: Closed</p>
        </Box>
        <Box
          sx={{
            pt: { xs: 5, md: 0 },
          }}
        >
          <p className="text-2xl font-bold">Contact Info</p>
          <p className="pt-5 pb-2">
            Phone:{" "}
            <a href="tel:416-497-8585" style={{ color: "var(--link-color)" }}>
              416-497-8585
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:corey.cultrera@gmail.com"
              style={{ color: "var(--link-color)" }}
            >
              dr.coreycultrera@gmail.com
            </a>
          </p>
        </Box>
      </Box>
      <GetInTouch />
    </Box>
  );
}
