import * as React from "react";
import { Box } from "@mui/material";

export default function Logo(width) {
  return (
    <Box>
      <a href="/">
        <Box
          component="img"
          src="/images/corey_logo.png"
          alt="Dr. Corey Cultrera"
          sx={{
            width: width,
            objectFit: "contain",
          }}
        />
      </a>
    </Box>
  );
}
