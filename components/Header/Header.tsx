"use client";
import { Box, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import CustomButton from "../Button/Button";
import "./Header.scss";
import BoxTitle from "../BoxTitle/BoxTitle";
import theme from "../../theme";

// Set style for 2 buttons
const useStyles = makeStyles({
  buttonGooglePlay: {
    backgroundImage: "url('/src/assets/google-play-app-store.png')",
    backgroundColor: "lightgray",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  buttonAppleStore: {
    background: "url('/src/assets/iphone-app-store-apple-store.png') ",
    backgroundColor: "lightgray",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
});

export const Header = () => {
  const classes = useStyles();

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

        {/* Menu Navbar */}
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
            fontSize={theme.custom.fontSizes.fs_9}
            fontFamily={theme.custom.fontFamily.fontPoppins}
          />
        </Box>
      </Stack>

      {/* Menu Content */}
      <Box sx={{ marginTop: 7.8 }}>
        <BoxTitle
          title={
            <div
              style={{
                fontSize: "60px",
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
          descStyle={{
            color: "#1F2326",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "22x",
            maxWidth: "715px",
            maxHeight: "52px",
          }}
        />
      </Box>

      {/* Buttons Header */}
      <Box
        sx={{
          marginTop: "70px",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          gap={"23px"}
        >
          <CustomButton
            className={classes.buttonGooglePlay}
            onClick={handleClick}
            width="206px"
            height="62px"
            backgroundColor="black"
          />
          <CustomButton
            className={classes.buttonAppleStore}
            onClick={handleClick}
            width="206px"
            height="62px"
            backgroundColor="black"
          />
        </Stack>
      </Box>

      {/* Menu Screen */}
      <Box
        sx={{
          height: "680px",
          width: "900px",
          borderRadius: "43.172px",
          border: "3.7px solid #B3B3B3",
          position: "relative",
          overflow: "hidden",
          display: "flex", // Added flex display for centering
          justifyItems: "center", // Center the Box horizontally
          alignItems: "center", // Center the Box vertically
          margin: "76px auto",
        }}
      >
        <Box
          sx={{
            width: "900px", // Use 100% to fill the Container
            height: "750px",
            borderRadius: "43.172px",
            background: "#0B0B0B",
            position: "relative",
            overflow: "hidden",
            padding: "0px",
          }}
        >
          <Box
            sx={{
              width: "900px",
              height: "750px",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Image
              src={"/src/assets/image_menu_header.png"}
              alt="Menu Header"
              width={900} // Adjust width for padding
              height={850} // Adjust height for padding
              style={{
                objectFit: "contain", // Adjust the image fit
                overflow: "hidden",
                margin: "0px 31px",
                transform: "translateX(-0.4%)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
