import React from "react";
import { Button, Typography } from "@mui/material";

export default function OutlinedButton({ buttonText, onClick }) {
  return (
    <Button
        onClick={onClick}
        variant="outlined"
        sx={{
            flexDirection: "column",
            textTransform: "none",
            color: "black",
            borderRadius: "10px",
            borderColor: "black",
            transition: "background-color 0.3s ease, color 0.3s ease",
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
