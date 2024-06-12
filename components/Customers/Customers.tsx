import { Box, Grid, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../theme";
import BoxTitle from "../BoxTitle/BoxTitle";
import "./Customers.scss";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "10px",
  border: "1px solid #F2F3F8",
  boxShadow: "none",
  //width: "511px",
  height: "236px",
}));

export const Customers = () => {
  return (
    <div className="customer_wrapper">
      <BoxTitle
        title={
          <div>
            <h2
              className="heading_title--customer"
              style={{
                fontFamily: theme.custom.fontFamily.fontSora,
                color: theme.palette.black,
              }}
            >
              What Our{" "}
              <span
                className="feature_title--customer"
                style={{
                  fontFamily: theme.custom.fontFamily.fontSora,
                  color: theme.palette.bluePrimary,
                }}
              >
                Clients
              </span>{" "}
              Say
            </h2>
          </div>
        }
        desc="Here, We make almost every genre of applications. 
Your name it and we build it."
        descStyle={{
          marginTop: "24px",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
          textAlign: "center",
          color: theme.palette.descPrimary,
          FontFamily: theme.custom.fontFamily.fontPoppins,
          width: "500px",
        }}
      />

      {/* Content of Customer */}
      <Grid
        container
        spacing={3.8}
        columns={16}
        sx={{
          marginTop: "70px",
        }}
      >
        <Grid item xs={8}>
          <Item
            sx={{
              padding: "0px 30px 0px 30px",
            }}
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                marginTop: "29px",
              }}
            >
              <Box>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  textAlign={"left"}
                  gap={2}
                >
                  <Image
                    src={"/src/assets/ceo_handsome_customer.png"}
                    alt="CEO"
                    width={60}
                    height={60}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <span>
                    <h2 className="customer_name">Yaron Shiftman</h2>
                    <p className="customer_job">CEO, Swathly Ltd</p>
                  </span>
                </Stack>
              </Box>
              <Image
                alt="Stars"
                src={"/src/assets/stars_customer.png"}
                width={101}
                height={17}
              />
            </Stack>
            <p
              style={{
                textAlign: "left",
                marginTop: "29px",
              }}
              className="customer_opinion"
            >
              I’m very pleased with their work. When I need help with any aspect
              of development, I’m able to call on them to take care of it.
              They’re professional and complete tasks in a timely manner.
            </p>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item
            sx={{
              padding: "0px 30px 0px 30px",
              boxShadow: "0px 20px 60px -20px rgba(22, 22, 22, 0.16)",
            }}
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                marginTop: "29px",
              }}
            >
              <Box>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  textAlign={"left"}
                  gap={2}
                >
                  <Image
                    src={"/src/assets/confident_man_customer.png"}
                    alt="CEO"
                    width={60}
                    height={60}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <span>
                    <h2 className="customer_name">Elmo Weber</h2>
                    <p className="customer_job">Founder, Fair Friend </p>
                  </span>
                </Stack>
              </Box>
              <Image
                alt="Stars"
                src={"/src/assets/stars_customer.png"}
                width={101}
                height={17}
              />
            </Stack>
            <p
              style={{
                textAlign: "left",
                marginTop: "29px",
              }}
              className="customer_opinion"
            >
              Scopic has never let me down. I’m pleased with our partnership and
              they consistently develop reliable applications. They estimate a
              range of hours for each project and they manage it efficiently.
            </p>
          </Item>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "50px auto",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="95"
          height="7"
          viewBox="0 0 95 7"
          fill="none"
        >
          <circle cx="61.5" cy="3.5" r="3.5" fill="#E7E7EA" />
          <circle cx="3.5" cy="3.5" r="3.5" fill="#E7E7EA" />
          <circle cx="76.5" cy="3.5" r="3.5" fill="#E7E7EA" />
          <circle cx="18.5" cy="3.5" r="3.5" fill="#E7E7EA" />
          <circle cx="91.5" cy="3.5" r="3.5" fill="#E7E7EA" />
          <rect x="30" width="20" height="7" rx="3.5" fill="#1663F9" />
        </svg>
      </Box>
    </div>
  );
};
