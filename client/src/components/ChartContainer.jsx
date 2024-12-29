import React from "react";
import { Box, Grid, useTheme } from "@mui/material";

const ChartContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: "2rem" }}>
      {/* Grid container for arranging graphs */}
      <Grid container spacing={2}>
        {children.map((child, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            {/* Each child graph will be placed in this grid item */}
            <Box
              sx={{
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
                padding: "1rem",
                height: "100%", // Ensure each graph component fits well within the grid
              }}
            >
              {child}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChartContainer;
