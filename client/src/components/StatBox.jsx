import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween"; // FlexBetween component for alignment

const StatBox = ({ title, value, icon }) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      p="1.5rem 1rem"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
      height="100px" // Set a fixed height for better alignment
      position="relative" // Allow the icon to be positioned absolutely within this container
    >
      {/* Value on top, bold and large */}
      <FlexBetween sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: theme.palette.secondary[200] }}
        >
          {value}
        </Typography>
      </FlexBetween>

      {/* Title below the value */}
      <FlexBetween sx={{ width: "100%" }}>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>

        {/* Icon on the right side, positioned independently */}
        <Box
          sx={{
            fontSize: "50px", // Large icon size
            position: "absolute", // Absolute position so it doesn't affect container size
            right: 10, // Margin from the right side
            top: "50%", // Vertically center the icon
            transform: "translateY(-50%)", // Adjust to truly center vertically
          }}
        >
          {icon}
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
