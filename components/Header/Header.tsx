"use client";
import { Button, Paper, Stack } from "@mui/material";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import Navigation from "./Navigation/Navigation";
import CustomButton from "../Button/Button";
import "./Header.scss";

export const Header = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="wrapper">
      <Stack direction="row" alignItems={"center"} textAlign={"center"}>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={1}
          textAlign={"center"}
        >
          <Image src="/logo.png" width={36} height={36} alt="Logo MicPro" />
          <p>MicPro</p>
        </Stack>

        <span>
          <Navigation />
        </span>

        <span>
          <CustomButton
            onClick={handleClick}
            backgroundColor="#1663F9"
            text="Order Now"
            color="#fff"
            width="100px"
            height="30px"
            borderRadius="30px"
            fontSize="9px"
          />
        </span>
      </Stack>
    </div>
  );
};
