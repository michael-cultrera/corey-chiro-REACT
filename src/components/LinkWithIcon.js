import * as React from "react";
import { Link, Typography } from "@mui/material";

export default function LinkWithIcon({ href, color, hoverColor, icon, linkText }) {
  return (
    <Link
        href={href}
        sx={{
        color: color,
        textDecoration: "none",
        transition: "color 0.3s ease",
        '&:hover': {
            color: hoverColor
        }
        }}
    >
        <Typography variant="body" sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>{<>{icon}{linkText}</>}</Typography>
    </Link>
  );
}
