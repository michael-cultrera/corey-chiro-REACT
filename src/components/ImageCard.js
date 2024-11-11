import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function ImageCard({ image, title, description }) {
  return (
    <Card sx={{
      backgroundColor: 'var(--dark-green)',
      height: '100%',
    }}>
      <CardMedia
        component="img"
        image={image}
        title={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
