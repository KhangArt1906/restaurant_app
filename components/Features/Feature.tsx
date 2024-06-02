import React from "react";
import "./Features.scss";
import BoxTitle from "../BoxTitle/BoxTitle";
import { styled } from "@mui/material/styles";
import theme from "../../theme";
import Paper from "@mui/material/Paper";
import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";

export const Feature = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "375px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "14px",
    boxShadow: "0px 10px 70px -10px rgba(7, 7, 7, 0.07)",
  }));

  return (
    <React.Fragment>
      <Box>
        <BoxTitle
          title={
            <div
              style={{
                fontSize: "50px",
                fontStyle: "normal",
                fontWeight: "700",
                fontFamily: theme.custom.fontFamily.fontSora,
                color: theme.palette.black,
              }}
            >
              Our Special
              <span
                style={{
                  color: "#1663F9",
                  fontFamily: theme.custom.fontFamily.fontSora,
                }}
              >
                {" "}
                Features
              </span>
            </div>
          }
          desc={`This lesson provides a basic framework for conducting a recipe demonstration`}
          descStyle={{
            color: "#81879D",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "24x",
          }}
        />
      </Box>

      {/* Grid 3 items */}
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          textAlign: "center",
          justifyItems: "center",
          alignItems: "center",
          marginTop: "46px",
          transform: "translateX(2%)",
          overflowY: "hidden",
          maxWidth: "1200px",
        }}
      >
        <Grid item xs="auto">
          <Item>
            <Image
              src="/src/assets/sausage_fried.png"
              width={260}
              height={150}
              alt="Sausage Fried"
            />
            <Stack
              sx={{
                marginTop: "19px",
              }}
              direction={"column"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              <h4
                style={{
                  fontFamily: theme.custom.fontFamily.fontSora,
                }}
                className="heading_feature"
              >
                Exquisite Recipe
              </h4>
              <p
                style={{
                  fontFamily: theme.custom.fontFamily.fontPoppins,
                }}
                className="subheading_feature"
              >
                Phasollus risus turpis sit arnot magna non.
              </p>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs="auto">
          <Item>
            <Image
              src="/src/assets/chicken_sweler.png"
              width={260}
              height={150}
              alt="Sausage Fried"
            />
            <Stack
              sx={{
                marginTop: "19px",
              }}
              direction={"column"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              <h4
                style={{
                  fontFamily: theme.custom.fontFamily.fontSora,
                }}
                className="heading_feature"
              >
                Crispy Baked
              </h4>
              <p
                style={{
                  fontFamily: theme.custom.fontFamily.fontPoppins,
                }}
                className="subheading_feature"
              >
                Phasollus risus turpis sit arnot magna non.
              </p>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs="auto">
          <Item>
            <Image
              src="/src/assets/pasta_tomato.png"
              width={260}
              height={150}
              alt="Sausage Fried"
            />
            <Stack
              sx={{
                marginTop: "19px",
              }}
              direction={"column"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              <h4
                style={{
                  fontFamily: theme.custom.fontFamily.fontSora,
                }}
                className="heading_feature"
              >
                Pasta Recipe
              </h4>
              <p
                style={{
                  fontFamily: theme.custom.fontFamily.fontPoppins,
                }}
                className="subheading_feature"
              >
                Phasollus risus turpis sit arnot magna non.
              </p>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
