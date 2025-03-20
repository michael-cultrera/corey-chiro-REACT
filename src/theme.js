"use client";

import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    'xs': 0,
    'sm': 480,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1440,
  },
};

const theme = createTheme({
  breakpoints,
  typography: {
    fontFamily: "Urbanist, sans-serif",
    header: {
      paddingBottom: "1rem",
      fontWeight: 700,
      fontSize: "2rem",
    },
    body: {
      fontSize: "1rem",
    },
    body_light: {
      fontSize: "1rem",
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          header: "h1",
          body: "p",
          body_light: "p",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: `${breakpoints.values['2xl']}px !important`,
        }
      }
    }
  },
});

export default theme;
