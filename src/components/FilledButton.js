import React from "react";
import { Button, Typography } from "@mui/material";

export default function FilledButton({ buttonText, onClick }) {
  return (
    <Button
        onClick={onClick}
        variant="outlined"
        sx={{
            height: "50px",
            flexDirection: "column",
            textTransform: "none",
            color: "white",
            backgroundColor: "var(--dark-green)",
            borderRadius: "20px",
            borderColor: "var(--dark-green)",
            transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
            '&:hover': {
            borderColor: "black",
            backgroundColor: "black",
            color: "var(--honeydew)"
            }
        }}
    >
        <Typography variant="body">{buttonText}</Typography>
    </Button>
  );
}