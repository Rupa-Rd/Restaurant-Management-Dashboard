import React from "react";
import { Box, Grid, useTheme, Typography, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import StatBox from "components/StatBox"; // Assuming you have this component for individual stats
import {
  People,
  ShoppingCart,
  AttachMoney,
  ThumbUp,
} from "@mui/icons-material"; // Material icons for each stat
import ProfitChat from "components/ProfitChat";
import PopularTimeChart from "components/PopularTimeChart";
import Dishes from "components/Dishes";
import ProfitCalculator from "components/ProfitCalculator";
import UserRatings from "components/UserRatings";

function Dashboard() {
  const theme = useTheme(); // Access the current theme
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  // Determine the icon color based on the current theme mode (light or dark)
  const iconColor =
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : theme.palette.secondary.main;

  return (
    <Box m="0rem 2rem" sx={{ overflow: 'hidden' }}>
      <Header title="Dashboard" />

      {/* Grid container for StatBoxes */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox
            title="Visitors"
            value="580"
            icon={<People sx={{ fontSize: 50, color: iconColor }} />} // Dynamically change color
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox
            title="Orders Received"
            value="1080"
            icon={<ShoppingCart sx={{ fontSize: 50, color: iconColor }} />} // Dynamically change color
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox
            title="Net Earning"
            value="₹ 3,50,000"
            icon={<AttachMoney sx={{ fontSize: 50, color: iconColor }} />} // Dynamically change color
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox
            title="Customer Satisfaction"
            value="4.0"
            icon={<ThumbUp sx={{ fontSize: 50, color: iconColor }} />} // Dynamically change color
          />
        </Grid>
      </Grid>

      {/* Grid container for charts */}
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="repeat(6, 1fr)" // Adjusted rows to create a 6-row grid
        gap="20px"
        gridAutoRows="minmax(100px, auto)"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* First block: ProfitChart */}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={theme.palette.background.alt}
          height="270px"
          borderRadius="0.55rem"
        >
          <ProfitChat />
        </Box>

        {/* Second block: Placeholder */}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={theme.palette.background.alt}
          height="270px"
          padding={3}
          borderRadius="0.55rem"
        >
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Liked Dishes
          </Typography>
          <Dishes />

          <Typography variant="h6" fontWeight="bold" mt={0} mb={1}>
            Dis-liked Dishes
          </Typography>
          <Dishes />

          {/* Add your content here */}
        </Box>

        {/* Third block: Placeholder */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p={3}
          height="540px"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" fontWeight="bold" mb={1}>
            User Ratings
          </Typography>
          <UserRatings />
          {/* Add your content here */}
        </Box>

        {/* Fourth block: PopularTimeChart */}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={theme.palette.background.alt}
          height="250px"
          borderRadius="0.55rem"
        >
          <PopularTimeChart />
        </Box>

        {/* Fifth block: Placeholder */}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={theme.palette.background.alt}
          height="250px"
          padding={3}
          borderRadius="0.55rem"
        >
          
          <ProfitCalculator />
          {/* Add your content here */}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
