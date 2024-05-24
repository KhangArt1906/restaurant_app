import React from "react";
import { GradientText } from "react-gradient-text";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const BoxTitle = ({ title, desc, align = "center", children }) => {
  return (
    <Box display="flex" flexDirection="column" gap={3} alignItems="center">
      <Typography
        variant="h3"
        sx={{
          textAlign: align,
          margin: "0 auto",
        }}
        component="div"
      >
        {title}
      </Typography>

      <Box margin={align ? "0 auto" : ""}>{children}</Box>

      <Typography
        variant="body1"
        sx={{
          textAlign: align,
        }}
        component="div"
      >
        {desc}
      </Typography>
    </Box>
  );
};

BoxTitle.propTypes = {
  title: PropTypes.node.isRequired,
  desc: PropTypes.string.isRequired,
  align: PropTypes.string,
  children: PropTypes.node,
};

export default BoxTitle;
