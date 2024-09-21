import React from "react";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Typography>
      <Box
        sx={{
          px: 5,
          py: 5,
        }}
      >
        <Typography variant="header">What is Network Spinal Analysis?</Typography>
      </Box>
    </Typography>
  );
}
