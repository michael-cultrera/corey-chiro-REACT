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
      fontWeight: 700,
      fontSize: "1.2rem",
      paddingBottom: "1rem",
      [`@media (min-width:${breakpoints.values['sm']}px)`]: {
        fontSize: "1.3rem",
      },
      [`@media (min-width:${breakpoints.values['md']}px)`]: {
        fontSize: "1.4rem",
      },
      [`@media (min-width:${breakpoints.values['lg']}px)`]: {
        fontSize: "1.5rem",
      },
      [`@media (min-width:${breakpoints.values['xl']}px)`]: {
        fontSize: "1.8rem",
      },
      [`@media (min-width:${breakpoints.values['2xl']}px)`]: {
        fontSize: "2rem",
      },
    },
    body: {
      fontSize: "0.9rem",
      [`@media (min-width:${breakpoints.values['sm']}px)`]: {
        fontSize: "1rem",
      },
      [`@media (min-width:${breakpoints.values['md']}px)`]: {
        fontSize: "1.1rem",
      },
      [`@media (min-width:${breakpoints.values['lg']}px)`]: {
        fontSize: "1.3rem",
      },
      [`@media (min-width:${breakpoints.values['xl']}px)`]: {
        fontSize: "1.6rem",
      },
      [`@media (min-width:${breakpoints.values['2xl']}px)`]: {
        fontSize: "1.8rem",
      },
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
  },
});

export default theme;
