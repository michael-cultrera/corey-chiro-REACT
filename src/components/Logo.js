import * as React from "react";
import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box>
      <a href="/">
        <Box
          component="img"
          src="/images/corey_logo.png"
          alt="Dr. Corey Cultrera"
          sx={{
            position: "relative",
            display: "block",
            margin: "auto",
            padding: "20px",
            width: {
              xs: "160px",
              md: "200px",
            },
            objectFit: "contain",
          }}
        />
      </a>
    </Box>
  );
}
