import { Box, Container, Grid, Paper, Stack, styled } from "@mui/material";
import theme from "../../theme";
import BoxTitle from "../BoxTitle/BoxTitle";
import "./Orders.scss";
import Image from "next/image";
import { ArrowForward, ShoppingCart } from "@mui/icons-material";
import Button from "../Button/Button";

export const Orders = () => {
  const handleClick = () => {
    console.log("Click!");
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "570px",
    height: "160px",
    borderRadius: "12px",
  }));

  return (
    <div className="order_wrapper">
      {/* BoxTitle */}
      <BoxTitle
        title={
          <div
            style={{
              color: theme.palette.black,
              textAlign: "center",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: 700,
              fontFamily: theme.custom.fontFamily.fontSora,
            }}
          >
            Most Ordered Food in
          </div>
        }
        desc="New York"
        descStyle={{
          color: theme.palette.bluePrimary,
          fontSize: "50px",
          fontStyle: "normal",
          fontWeight: 700,
          fontFamily: theme.custom.fontFamily.fontSora,
        }}
      />

      {/* Container Orders Food */}
      <Container
        sx={{
          width: "1230px",
          height: "710px",
          marginTop: "77px",
          background: theme.palette.backgroundOrder,
          borderRadius: "30px",
        }}
      >
        {/* Grid */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={6}
            sx={{
              marginTop: "22px",
            }}
          >
            <Item>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Stack
                    flexDirection={"row"}
                    textAlign={"left"}
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      width={120}
                      height={120}
                      sx={{
                        background: "#FBF5EF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        width={120}
                        height={85}
                        alt="Chicken Curry"
                        src={"/src/assets/chicken_buffalo_orders.png"}
                      />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "20px",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="heading_offer--menu"
                      >
                        Chicken Curry
                      </h4>
                      <p
                        style={{
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="subheading_offer--menu"
                      >
                        1234 elgin st. Celina, newyork city 7894
                      </p>
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="price_offer--menu"
                      >
                        $88
                      </h4>
                    </Box>
                  </Stack>
                </Box>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "6px",
                    background: theme.palette.bluePrimary,
                    color: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginRight: "20px",
                  }}
                >
                  <ShoppingCart width="32px" height="32px" />
                </div>
              </Stack>
            </Item>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              marginTop: "22px",
            }}
          >
            <Item>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Stack
                    flexDirection={"row"}
                    textAlign={"left"}
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      width={120}
                      height={120}
                      sx={{
                        background: "#FBF5EF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        width={120}
                        height={85}
                        alt="Chicken Curry"
                        src={"/src/assets/chicken_buffalo_orders.png"}
                      />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "20px",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="heading_offer--menu"
                      >
                        Chicken Curry
                      </h4>
                      <p
                        style={{
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="subheading_offer--menu"
                      >
                        1234 elgin st. Celina, newyork city 7894
                      </p>
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="price_offer--menu"
                      >
                        $88
                      </h4>
                    </Box>
                  </Stack>
                </Box>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "6px",
                    background: theme.palette.bluePrimary,
                    color: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginRight: "20px",
                  }}
                >
                  <ShoppingCart width="32px" height="32px" />
                </div>
              </Stack>
            </Item>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              marginTop: "12px",
            }}
          >
            <Item>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Stack
                    flexDirection={"row"}
                    textAlign={"left"}
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      width={120}
                      height={120}
                      sx={{
                        background: "#FBF5EF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        width={120}
                        height={85}
                        alt="Chicken Curry"
                        src={"/src/assets/chicken_buffalo_orders.png"}
                      />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "20px",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="heading_offer--menu"
                      >
                        Chicken Curry
                      </h4>
                      <p
                        style={{
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="subheading_offer--menu"
                      >
                        1234 elgin st. Celina, newyork city 7894
                      </p>
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="price_offer--menu"
                      >
                        $88
                      </h4>
                    </Box>
                  </Stack>
                </Box>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "6px",
                    background: theme.palette.bluePrimary,
                    color: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginRight: "20px",
                  }}
                >
                  <ShoppingCart width="32px" height="32px" />
                </div>
              </Stack>
            </Item>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              marginTop: "12px",
            }}
          >
            <Item>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Stack
                    flexDirection={"row"}
                    textAlign={"left"}
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      width={120}
                      height={120}
                      sx={{
                        background: "#FBF5EF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        width={120}
                        height={85}
                        alt="Chicken Curry"
                        src={"/src/assets/chicken_buffalo_orders.png"}
                      />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "20px",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="heading_offer--menu"
                      >
                        Chicken Curry
                      </h4>
                      <p
                        style={{
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="subheading_offer--menu"
                      >
                        1234 elgin st. Celina, newyork city 7894
                      </p>
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="price_offer--menu"
                      >
                        $88
                      </h4>
                    </Box>
                  </Stack>
                </Box>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "6px",
                    background: theme.palette.bluePrimary,
                    color: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginRight: "20px",
                  }}
                >
                  <ShoppingCart width="32px" height="32px" />
                </div>
              </Stack>
            </Item>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              marginTop: "12px",
            }}
          >
            <Item>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Stack
                    flexDirection={"row"}
                    textAlign={"left"}
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      width={120}
                      height={120}
                      sx={{
                        background: "#FBF5EF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        width={120}
                        height={85}
                        alt="Chicken Curry"
                        src={"/src/assets/chicken_buffalo_orders.png"}
                      />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "20px",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="heading_offer--menu"
                      >
                        Chicken Curry
                      </h4>
                      <p
                        style={{
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="subheading_offer--menu"
                      >
                        1234 elgin st. Celina, newyork city 7894
                      </p>
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="price_offer--menu"
                      >
                        $88
                      </h4>
                    </Box>
                  </Stack>
                </Box>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "6px",
                    background: theme.palette.bluePrimary,
                    color: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginRight: "20px",
                  }}
                >
                  <ShoppingCart width="32px" height="32px" />
                </div>
              </Stack>
            </Item>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              marginTop: "12px",
            }}
          >
            <Item>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Stack
                    flexDirection={"row"}
                    textAlign={"left"}
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      width={120}
                      height={120}
                      sx={{
                        background: "#FBF5EF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        width={120}
                        height={85}
                        alt="Chicken Curry"
                        src={"/src/assets/chicken_buffalo_orders.png"}
                      />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "20px",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="heading_offer--menu"
                      >
                        Chicken Curry
                      </h4>
                      <p
                        style={{
                          fontFamily: theme.custom.fontFamily.fontPoppins,
                        }}
                        className="subheading_offer--menu"
                      >
                        1234 elgin st. Celina, newyork city 7894
                      </p>
                      <h4
                        style={{
                          fontFamily: theme.custom.fontFamily.fontSora,
                        }}
                        className="price_offer--menu"
                      >
                        $88
                      </h4>
                    </Box>
                  </Stack>
                </Box>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "6px",
                    background: theme.palette.bluePrimary,
                    color: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginRight: "20px",
                  }}
                >
                  <ShoppingCart width="32px" height="32px" />
                </div>
              </Stack>
            </Item>
          </Grid>

          {/* Button */}
          <Button
            onClick={handleClick}
            width="243px"
            className="btn_order"
            height="60px"
            text="VIEW ALL FOOD"
            background={theme.palette.bluePrimary}
            color="#fff"
            borderRadius="10px"
            fontFamily={theme.custom.fontFamily.fontPoppins}
            fontSize={theme.custom.fontSizes.fs_16}
          >
            <ArrowForward width="24px" height="24px" />
          </Button>
        </Grid>
      </Container>
    </div>
  );
};
