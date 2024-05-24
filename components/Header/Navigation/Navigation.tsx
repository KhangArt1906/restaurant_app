"use client";

import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import "./Navigation.scss";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div className="header-wrapper_nav">
        <Box sx={{ minWidth: 120 }}>
          <Link
            className="nav_restaurant__link"
            href=""
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Home
          </Link>
        </Box>
        <Tooltip title="">
          <Box sx={{ minWidth: 120 }}>
            <Link
              className="nav_restaurant__link"
              href=""
              onClick={handleClick}
              style={{ backgroundColor: "none" }}
              aria-controls={open ? "services-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <span style={{ color: "black" }}>
                <Stack
                  direction={"row"}
                  textAlign={"center"}
                  alignItems={"center"}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Services
                  <KeyboardArrowDown
                    sx={{
                      fontSize: 16,
                    }}
                  />
                </Stack>
              </span>
            </Link>
          </Box>
        </Tooltip>

        <Tooltip title="">
          <Box sx={{ minWidth: 110 }}>
            <Link
              className="nav_restaurant__link"
              href=""
              onClick={handleClick}
              style={{ backgroundColor: "none" }}
              aria-controls={open ? "expertise-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <span style={{ color: "black" }}>
                <Stack
                  direction={"row"}
                  textAlign={"center"}
                  alignItems={"center"}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Expertise
                  <KeyboardArrowDown
                    sx={{
                      fontSize: 16,
                    }}
                  />
                </Stack>
              </span>
            </Link>
          </Box>
        </Tooltip>

        <Box sx={{ minWidth: 60 }}>
          <Link
            className="nav_restaurant__link"
            href=""
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Case
          </Link>
        </Box>

        <Box sx={{ minWidth: 98 }}>
          <Link
            className="nav_restaurant__link"
            href=""
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Pricing
          </Link>
        </Box>

        <Tooltip title="">
          <Box sx={{ minWidth: 120 }}>
            <Link
              className="nav_restaurant__link"
              href=""
              onClick={handleClick}
              style={{ backgroundColor: "none" }}
              aria-controls={open ? "company-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <span
                style={{ color: "black", fontFamily: "Poppins, sans-serif" }}
              >
                <Stack
                  direction={"row"}
                  textAlign={"center"}
                  alignItems={"center"}
                  style={{
                    marginLeft: "15px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Company
                  <KeyboardArrowDown
                    sx={{
                      fontSize: 16,
                    }}
                  />
                </Stack>
              </span>
            </Link>
          </Box>
        </Tooltip>
      </div>

      {/* Menu Services */}
      <Menu
        anchorEl={anchorEl}
        id="expertise-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>Booking</MenuItem>

        <MenuItem onClick={handleClose}>Calling</MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>Assisting</MenuItem>

        <MenuItem onClick={handleClose}>Settings</MenuItem>
      </Menu>

      {/* Menu Expertise */}
      <Menu
        anchorEl={anchorEl}
        id="services-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>Expert Food</MenuItem>

        <MenuItem onClick={handleClose}>Expert Meat</MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>Expert Ingredients</MenuItem>

        <MenuItem onClick={handleClose}>Expert Nutritions</MenuItem>
      </Menu>

      {/* Menu Company */}
      <Menu
        anchorEl={anchorEl}
        id="company-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>Expert Food</MenuItem>

        <MenuItem onClick={handleClose}>Expert Meat</MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>Expert Ingredients</MenuItem>

        <MenuItem onClick={handleClose}>Expert Nutritions</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
