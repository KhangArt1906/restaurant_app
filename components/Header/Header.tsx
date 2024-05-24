"use client";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import CustomButton from "../Button/Button";
import "./Header.scss";
import BoxTitle from "../BoxTitle/BoxTitle";
import theme from "../../theme";

export const Header = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="wrapper">
      {/* Menu Header */}
      <Stack direction="row" alignItems={"center"} textAlign={"center"}>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={1}
          textAlign={"center"}
          style={{
            marginRight: "96px",
          }}
        >
          <Image src="/logo.png" width={36} height={36} alt="Logo MicPro" />
          <b
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
            }}
          >
            MicPro
          </b>
        </Stack>

        <Box>
          <Navigation />
        </Box>

        <Box>
          <CustomButton
            className="header_btn"
            onClick={handleClick}
            backgroundColor="#1663F9"
            text="Order Now"
            color="#fff"
            width="120px"
            height="35px"
            borderRadius="30px"
            fontSize="9px"
            fontFamily={theme.custom.fontFamily.fontPoppins}
          />
        </Box>
      </Stack>

      <Box sx={{ marginTop: 7.8 }}>
        <BoxTitle
          title={
            <div
              style={{
                fontSize: "60",
                fontStyle: "normal",
                fontWeight: "700",
                fontFamily: theme.custom.fontFamily.fontSora,
                color: theme.palette.black,
              }}
            >
              The Best way to grow <br />
              your{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #F961D8 36.52%, #1663F9 63.78%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: theme.custom.fontFamily.fontSora,
                }}
              >
                Business
              </span>
            </div>
          }
          desc={
            `Imagine you don’t need a diet beacuse we provide healthy and delicious toad ` +
            `for you! We are providing the best food delivery services`
          }
        />
      </Box>
    </div>
  );
};
