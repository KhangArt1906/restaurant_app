// Button.tsx
"use client";

import React from "react";
import { Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material"; // Import your icon here

interface ButtonProps {
  onClick: () => void;
  className?: string;
  background?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  text?: string;
  children?: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  backgroundColor,
  background,
  fontSize,
  fontFamily,
  color,
  borderRadius,
  width,
  height,
  text,
  children,
}) => {
  const buttonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    backgroundColor,
    background,
    fontSize,
    fontFamily,
    color,
    borderRadius,
    width,
    height,
  };

  return (
    <Button className={className} onClick={onClick} style={buttonStyle}>
      {text}
      {children}
    </Button>
  );
};

export default CustomButton;
