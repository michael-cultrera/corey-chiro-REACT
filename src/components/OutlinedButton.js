import { Button, Typography } from "@mui/material";

export default function OutlinedButton({ buttonText, fontColor, fontColorHover, borderColor, onClick }) {
  return (
    <Button
        onClick={onClick}
        variant="outlined"
        sx={{
            flexDirection: "column",
            textTransform: "none",
            color: fontColor,
            borderRadius: "10px",
            borderColor: borderColor,
            transition: "background-color 0.3s ease, color 0.3s ease",
            '&:hover': {
            borderColor: borderColor,
            backgroundColor: borderColor,
            color: fontColorHover,
            }
        }}
        >
        <Typography variant="body">{buttonText}</Typography>
    </Button>
  );
}
