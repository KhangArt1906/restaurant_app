"use client";
import { createTheme } from "@mui/material";

const createClientTheme = async () => {
  const typography = {
    fontFamily: "Poppins, sans-serif",
  };

  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

    typography: typography,
  });
};

export default createClientTheme;
