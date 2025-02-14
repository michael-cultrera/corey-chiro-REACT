import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function ImageCard({ image, title, description }) {
  return (
    <Button sx={{ textTransform: "none", textAlign: "left", height: "100%", "&:hover": { backgroundColor: "var(--dark-green)" } }}>
      <Card sx={{
        backgroundColor: 'transparent',
        height: "100%",
        boxShadow: 'none',
        borderRadius: '0px'
      }}>
        <CardMedia
          component="img"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <strong>{title}</strong>
          </Typography>
          <Typography variant="body_light">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
