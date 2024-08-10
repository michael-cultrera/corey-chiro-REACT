import React from "react";
import { Box, TextField, Button } from "@mui/material";

const GetInTouch = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      sx={{
        pt: 5,
      }}
    >
      <p className="text-2xl font-bold text-center">Get In Touch</p>
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
          sx={{
            width: "350px",
            "& .MuiInputBase-input": {
              fontFamily: "var(--font-family)",
            },
            "& .MuiInputLabel-root": {
              fontFamily: "var(--font-family)",
            },
          }}
        />
        <TextField
          label="Email"
          type="email"
          margin="normal"
          required
          sx={{
            width: "350px",
            "& .MuiInputBase-input": {
              fontFamily: "var(--font-family)",
            },
            "& .MuiInputLabel-root": {
              fontFamily: "var(--font-family)",
            },
          }}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          margin="normal"
          required
          sx={{
            width: "350px",
            "& .MuiInputBase-input": {
              fontFamily: "var(--font-family)",
            },
            "& .MuiInputLabel-root": {
              fontFamily: "var(--font-family)",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "var(--link-color)",
            "&:hover": { backgroundColor: "var(--link-color)", opacity: 0.8 },
            fontFamily: "var(--font-family)",
          }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default GetInTouch;
