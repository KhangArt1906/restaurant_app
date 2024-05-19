"use client";

import { Button } from "@mui/material";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  backgroundColor?: string;
  fontSize?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  text?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  backgroundColor, // Sử dụng biến CSS --bg-button cho màu nền
  fontSize,
  color,
  borderRadius,
  width,
  height,
  text,
}) => {
  const buttonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    backgroundColor,
    fontSize,
    color,
    borderRadius,
    width,
    height,
  };

  return (
    <Button className={className} onClick={onClick} style={buttonStyle}>
      {text}
    </Button>
  );
};

export default CustomButton;
