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
      fontSize: "1.3rem",
    },
    body: {
      fontSize: "1rem",
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          header: "h1",
          body: "p"
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: `${breakpoints.values['2xl']}px !important`,
          padding: "45px",
        }
      }
    }
  },
});

export default theme;
