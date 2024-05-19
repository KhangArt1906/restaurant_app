"use client";

import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  createTheme,
  Divider,
  Menu,
  MenuItem,
  ThemeProvider,
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
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>
          <Link className="nav_restaurant__link" href="">
            Home
          </Link>
        </Typography>
        <Tooltip title="">
          <Typography sx={{ minWidth: 100 }}>
            <Link
              className="nav_restaurant__link"
              href=""
              onClick={handleClick}
              style={{ backgroundColor: "none" }}
              aria-controls={open ? "services-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <span style={{ color: "black" }}>Services</span>
            </Link>
          </Typography>
        </Tooltip>

        <Tooltip title="">
          <Typography sx={{ minWidth: 150 }}>
            <Link
              className="nav_restaurant__link"
              href=""
              onClick={handleClick}
              style={{ backgroundColor: "none" }}
              aria-controls={open ? "expertise-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <span style={{ color: "black" }}>Expertise</span>
            </Link>
          </Typography>
        </Tooltip>

        <Typography sx={{ minWidth: 58 }}>
          <Link className="nav_restaurant__link" href="">
            Case
          </Link>
        </Typography>

        <Typography sx={{ minWidth: 108 }}>
          <Link className="nav_restaurant__link" href="">
            Pricing
          </Link>
        </Typography>

        <Tooltip title="">
          <Typography sx={{ minWidth: 116 }}>
            <Link
              className="nav_restaurant__link"
              href=""
              onClick={handleClick}
              style={{ backgroundColor: "none" }}
              aria-controls={open ? "company-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <span style={{ color: "black" }}>Company</span>
            </Link>
          </Typography>
        </Tooltip>
      </Box>

      {/* Menu Services */}
      <Menu
        anchorEl={anchorEl}
        id="expertise-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32)",
            mt: 1.5,
          },
        }}
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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32)",
            mt: 1.5,
          },
        }}
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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32)",
          },
        }}
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
