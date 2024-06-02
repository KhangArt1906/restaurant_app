"use client";
import {
  createTheme,
  ThemeOptions,
  PaletteOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: string;
    textTitle: string;
    blackGray: string;
    backgrounBtn: string;
  }
  interface PaletteOptions {
    black?: string;
    textTitle?: string;
    blackGray?: string;
    backgroundBtn?: string;
  }

  interface Theme {
    custom: {
      shadows: {
        md: string;
        xl: string;
      };
      fontSizes: {
        fs_12: number;
        fs_14: number;
        fs_16: number;
        fs_20: number;
        fs_24: number;
        fs_30: number;
        fs_50: number;
      };
      fontFamily: {
        fontPoppins: string;
        fontSora: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      shadows?: {
        md?: string;
        xl?: string;
      };
      fontSizes?: {
        fs_12?: number;
        fs_14?: number;
        fs_16?: number;
        fs_20?: number;
        fs_24?: number;
        fs_30?: number;
        fs_50?: number;
      };
      fontFamily: {
        fontPoppins?: string;
        fontSora?: string;
      };
    };
  }
}

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    black: "#1F2326",
    textTitle: "linear-gradient(90deg, #F961D8 36.52%, #1663F9 63.78%)",
    blackGray: "#404040",
    backgroundBtn:
      "linear-gradient(90deg, #B0B0B0 0%, #636363 8.85%, #C2C2C2 17.71%, #C2C2C2 75%, #EFEEEE 86.46%, #6C6C6C 100%)",
  },
  custom: {
    shadows: {
      md: "1px 1px 3px rgba(0, 0, 0, .25)",
      xl: "5px 5px 3px rgba(0, 0, 0, .25)",
    },
    fontSizes: {
      fs_12: 12,
      fs_14: 14,
      fs_16: 16,
      fs_20: 20,
      fs_24: 24,
      fs_30: 30,
      fs_50: 50,
    },
    fontFamily: {
      fontPoppins: "Poppins, sans-serif",
      fontSora: "Sora, sans-serif",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
