"use client";
import React from "react";
import { Header } from "../components/Header/Header";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { Box } from "@mui/material";
import "./page.scss";
import { Feature } from "../components/Features/Feature";
import { Orders } from "../components/Orders/Orders";
import { Offer } from "../components/Offer/Offer";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="wrapper">
        <Header />
        <Feature />
        <Orders />
        <Offer />
        {/* Các phần khác của trang */}
      </Box>
    </ThemeProvider>
  );
}
