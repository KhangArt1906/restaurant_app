"use client";
import React from "react";
import { Header } from "../components/Header/Header";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { Box } from "@mui/material";
import "./page.scss";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="wrapper">
        <Header />
        {/* Các phần khác của trang */}
      </Box>
    </ThemeProvider>
  );
}
