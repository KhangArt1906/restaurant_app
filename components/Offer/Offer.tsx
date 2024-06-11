import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import BoxTitle from "../BoxTitle/BoxTitle";
import "./Offer.scss";
import Button from "../Button/Button";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const Offer = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    width: "590px",
    height: "135px",
  }));

  return (
    <div className="offer_wrapper">
      {/* Box Title */}
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
              Get The Best
              <span
                style={{
                  color: theme.palette.bluePrimary,
                  fontFamily: theme.custom.fontFamily.fontSora,
                }}
              >
                {" "}
                Offer
              </span>
            </div>
          }
          desc={`Eat the food you dream about at affordable prices. No need to come to us just call is.`}
          descStyle={{
            color: theme.palette.descPrimary,
            textAlign: "center",
            fontFamily: theme.custom.fontFamily.fontPoppins,
            fontSize: "20px",
            fontWeight: 400,
            width: "553px",
          }}
        />
      </Box>

      {/* Container */}
      <Container
        sx={{
          marginTop: "80px",
          width: "1440px",
        }}
      >
        <Stack
          flexDirection={"row"}
          textAlign={"center"}
          justifyContent={"center"}
          gap={3}
          alignContent={"center"}
        >
          <Box
            sx={{
              width: "558px",
              height: "428px",
              borderRadius: "20px 0px 0px 20px",
              background: `
                url("/src/assets/offer_chicken.png")`,
              backgroundSize: "cover",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                width: "558px",
                height: "428px",
                position: "absolute",
                background:
                  "linear-gradient(90deg, #000 50%, rgba(0, 0, 0, 0.50) 100%)",
                opacity: 0.7,
              }}
            ></Box>

            <Box
              sx={{
                zIndex: 10,
                marginLeft: "60px",
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: theme.custom.fontSizes.fs_24,
                  fontWeight: 600,
                  fontStyle: "normal",

                  fontFamily: theme.custom.fontFamily.fontInter,
                }}
              >
                Lunch Time
              </Typography>
              <h2
                style={{
                  fontFamily: theme.custom.fontFamily.fontInter,
                }}
                className="heading_lunch--offer"
              >
                30%{" "}
                <b
                  style={{
                    fontFamily: theme.custom.fontFamily.fontInter,
                  }}
                  className="subheading_lunch--offer"
                >
                  OFF
                </b>
              </h2>

              <p
                style={{
                  fontFamily: theme.custom.fontFamily.fontInter,
                  marginBottom: "42px",
                }}
                className="desc_lunch--offer"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <Button
                className="btn_offer"
                width="130px"
                height="44px"
                text="Order Now"
                fontSize={theme.custom.fontSizes.fs_16}
                onClick={handleClick}
                background={theme.palette.bluePrimary}
                color="#fff"
                borderRadius="30px"
                fontFamily={theme.custom.fontFamily.fontInter}
              />
            </Box>
          </Box>

          <Box>
            <Grid
              container
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Item>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                  >
                    <Image
                      alt="Spicy Club"
                      width={150}
                      height={120}
                      src={"/src/assets/baked_offer_chicken.png"}
                    />
                    <Box
                      sx={{
                        marginLeft: "14px",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        justifyItems={"center"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <h2
                          style={{
                            fontFamily: theme.custom.fontFamily.fontInter,
                          }}
                          className="heading_offer--grid"
                        >
                          Spicy Club
                        </h2>

                        <div
                          style={{
                            width: "194px",
                            height: "1px",
                            background: "#F9E8F5",
                          }}
                        ></div>

                        <span
                          style={{
                            textAlign: "right",
                            fontWeight: 400,
                            fontFamily: theme.custom.fontFamily.fontInter,
                          }}
                          className="price_offer--grid"
                        >
                          ${" "}
                          <b
                            style={{
                              fontWeight: 600,
                            }}
                          >
                            42
                          </b>
                        </span>
                      </Stack>
                      <p
                        style={{
                          textAlign: "left",
                          marginTop: "15px",
                          color: theme.palette.descPrimary,
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="desc_offer--grid"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiu.
                      </p>
                    </Box>
                  </Stack>
                </Item>
              </Grid>

              <Grid item xs={8}>
                <Item>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                  >
                    <Image
                      alt="Spicy Club"
                      width={150}
                      height={120}
                      src={"/src/assets/spicy_pork_offer.png"}
                    />
                    <Box
                      sx={{
                        marginLeft: "14px",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        justifyItems={"center"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <h2
                          style={{
                            fontFamily: theme.custom.fontFamily.fontInter,
                          }}
                          className="heading_offer--grid"
                        >
                          Spicy Salad
                        </h2>

                        <div
                          style={{
                            width: "194px",
                            height: "1px",
                            background: "#F9E8F5",
                          }}
                        ></div>

                        <span
                          style={{
                            textAlign: "right",
                            fontWeight: 400,
                            fontFamily: theme.custom.fontFamily.fontInter,
                          }}
                          className="price_offer--grid"
                        >
                          ${" "}
                          <b
                            style={{
                              fontWeight: 600,
                            }}
                          >
                            42
                          </b>
                        </span>
                      </Stack>
                      <p
                        style={{
                          textAlign: "left",
                          marginTop: "15px",
                          color: theme.palette.descPrimary,
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="desc_offer--grid"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiu.
                      </p>
                    </Box>
                  </Stack>
                </Item>
              </Grid>

              <Grid item xs={8}>
                <Item>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                  >
                    <Image
                      alt="Spicy Club"
                      width={150}
                      height={120}
                      src={"/src/assets/beef_offer.png"}
                    />
                    <Box
                      sx={{
                        marginLeft: "14px",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        justifyItems={"center"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <h2
                          style={{
                            fontFamily: theme.custom.fontFamily.fontInter,
                          }}
                          className="heading_offer--grid"
                        >
                          Chicken Grill
                        </h2>

                        <div
                          style={{
                            width: "194px",
                            height: "1px",
                            background: "#F9E8F5",
                          }}
                        ></div>

                        <span
                          style={{
                            textAlign: "right",
                            fontWeight: 400,
                            fontFamily: theme.custom.fontFamily.fontInter,
                          }}
                          className="price_offer--grid"
                        >
                          ${" "}
                          <b
                            style={{
                              fontWeight: 600,
                            }}
                          >
                            42
                          </b>
                        </span>
                      </Stack>
                      <p
                        style={{
                          textAlign: "left",
                          marginTop: "15px",
                          color: theme.palette.descPrimary,
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="desc_offer--grid"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiu.
                      </p>
                    </Box>
                  </Stack>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
