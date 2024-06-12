import { Box, Grid, Paper, Stack } from "@mui/material";
import "./Blog.scss";
import BoxTitle from "../BoxTitle/BoxTitle";
import Button from "../Button/Button";
import theme from "../../theme";
import { ArrowForward } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 0px 0px 0px",
  backgroundColor: "transparent",
}));

export const Blog = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="blog_wrapper">
      <Stack
        gap={3}
        direction={"row"}
        justifyContent={"center"}
        alignContent={"center"}
        sx={{
          marginTop: "114px",
        }}
      >
        <Box>
          <div
            className="blog_content--left"
            style={{
              marginLeft: "50px",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                color: theme.palette.black,
                fontFamily: theme.custom.fontFamily.fontSora,
              }}
              className="heading_blog--left"
            >
              Our Food{" "}
              <span
                style={{
                  color: theme.palette.bluePrimary,
                  fontFamily: theme.custom.fontFamily.fontSora,
                }}
              >
                Blog
              </span>
            </h2>
            <p
              style={{
                color: theme.palette.descPrimary,
                fontFamily: theme.custom.fontFamily.fontPoppins,
                marginTop: "30px",
              }}
              className="desc_blog- style={{
              fontFamily: theme.custom.fontFamily.fontPoppins}}-left"
            >
              Eat the food you dream about at affordable prices. No need to come
              to us just call is.
            </p>
            <Button
              borderRadius="10px"
              fontSize={16}
              text="Learn More"
              backgroundColor={theme.palette.bluePrimary}
              width="194px"
              height="60px"
              onClick={handleClick}
              color="#fff"
              className="btn_blog"
            >
              <ArrowForward width={24} height={24} />
            </Button>
          </div>
        </Box>

        {/* Box Content Blog */}
        <Box>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <Item>
                <Stack
                  direction={"row"}
                  alignItems={"flex-start"}
                  textAlign={"left"}
                  justifyContent={"space-around"}
                  gap={3}
                >
                  <Image
                    src={"/src/assets/beef_steak_blog.png"}
                    width={230}
                    height={160}
                    alt="Beef Steak Blog"
                  />
                  <Box>
                    <p
                      className="blog_number"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontPoppins,
                      }}
                    >
                      Blog 01
                    </p>
                    <h2
                      className="heading_blog"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontSora,
                      }}
                    >
                      How to make a rice bowl?
                    </h2>
                    <p
                      className="desc_blog"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontPoppins,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur so adipiscing
                      elit, sed do eiusmod tempor the incididunt ut labore...
                    </p>
                  </Box>
                </Stack>
              </Item>
            </Grid>

            <Grid
              item
              xs
              sx={{
                marginTop: "35px",
                borderTop: "1px solid #e2e5e9",
                borderBottom: "1px solid #e2e5e9",
              }}
            >
              <Item
                sx={{
                  marginTop: "35px",
                  marginBottom: "24px",
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"flex-start"}
                  textAlign={"left"}
                  justifyContent={"space-around"}
                  gap={3}
                >
                  <Image
                    src={"/src/assets/spicy_pork_blog.png"}
                    width={230}
                    height={160}
                    alt="Spicy Pork"
                  />
                  <Box>
                    <p
                      className="blog_number"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontPoppins,
                      }}
                    >
                      Blog 02
                    </p>
                    <h2
                      className="heading_blog"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontSora,
                      }}
                    >
                      Get the pizza of the week.
                    </h2>
                    <p
                      className="desc_blog"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontPoppins,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur so adipiscing
                      elit, sed do eiusmod tempor the incididunt ut labore...
                    </p>
                  </Box>
                </Stack>
              </Item>
            </Grid>
            <Grid
              item
              xs
              sx={{
                marginTop: "35px",
              }}
            >
              <Item>
                <Stack
                  direction={"row"}
                  alignItems={"flex-start"}
                  textAlign={"left"}
                  justifyContent={"space-around"}
                  gap={3}
                >
                  <Image
                    src={"/src/assets/pasta_tomato_blog.png"}
                    width={230}
                    height={160}
                    alt="Pasta Tomato"
                  />
                  <Box>
                    <p
                      className="blog_number"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontPoppins,
                      }}
                    >
                      Blog 03
                    </p>
                    <h2
                      className="heading_blog"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontSora,
                      }}
                    >
                      Make your burger like this.
                    </h2>
                    <p
                      className="desc_blog"
                      style={{
                        fontFamily: theme.custom.fontFamily.fontPoppins,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur so adipiscing
                      elit, sed do eiusmod tempor the incididunt ut labore...
                    </p>
                  </Box>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
};
