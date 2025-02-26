import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const GetInTouch = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box>
      <Typography variant="header" sx={{ textAlign: "center" }}>Get In Touch</Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Name"
          margin="normal"
          required
        />
        <TextField
          label="Email"
          type="email"
          margin="normal"
          required
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "var(--link-color)",
            "&:hover": { backgroundColor: "var(--link-color)", opacity: 0.8 },
          }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default GetInTouch;
