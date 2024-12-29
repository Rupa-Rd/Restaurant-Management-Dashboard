import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetMenuQuery } from "states/api"; // Assuming this is the correct import for fetching the menu data
import Header from "components/Header";

const MenuCard = ({ dishname, category, price, popularity }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
        boxShadow: "none", // Ensure no background image or shadow
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {dishname}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={popularity} readOnly />
      </CardContent>
    </Card>
  );
};

const Menu = () => {
  const { data, isLoading } = useGetMenuQuery();
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  // Ensure data is an array before rendering
  const menuItems = Array.isArray(data) ? data : [];

  return (
    <Box m="1rem 2rem">
      <Header title="Menu" />
      {isLoading ? (
        <Typography variant="h6" color="textSecondary">
          Loading...
        </Typography>
      ) : menuItems.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          No menu items available.
        </Typography>
      ) : (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {menuItems.map(({ _id, dishname, category, price, popularity }) => (
            <MenuCard
              key={_id}
              dishname={dishname}
              category={category}
              price={price}
              popularity={popularity}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Menu;
