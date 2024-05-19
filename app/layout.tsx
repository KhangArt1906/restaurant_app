import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
