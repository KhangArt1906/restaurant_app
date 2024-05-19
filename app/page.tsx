"use client";
import React from "react";
import RootLayout from "./layout";
import { Header } from "../components/Header/Header";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="wrapper"
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Header />
        {/* Các phần khác của trang */}
      </Box>
    </ThemeProvider>
  );
}
