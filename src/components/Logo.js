import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box>
      <a href="/" style={{ display: "flex", width: "fit-content" }}>
        <Box
          component="img"
          src="/images/kinect_chiro_logo.png"
          alt="Dr. Corey Cultrera"
          sx={{
            width: {
              xs: "65px",
              sm: "75px",
              md: "80px",
            },
            objectFit: "contain",
          }}
        />
      </a>
    </Box>
  );
}
