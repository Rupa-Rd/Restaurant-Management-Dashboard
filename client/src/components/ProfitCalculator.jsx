import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Autocomplete,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function ProfitCalculator() {
  const [selectedItem, setSelectedItem] = useState("");
  const [duration, setDuration] = useState("day");
  const [profit, setProfit] = useState(0);
  const [discount, setDiscount] = useState(0);

  const menuItems = ["Pizza", "Burger", "Pasta", "Sushi"]; // Sample items, can be dynamically fetched
  const profitPerItem = {
    Pizza: 150, // Profit per unit of each item
    Burger: 120,
    Pasta: 100,
    Sushi: 200,
  };

  // Calculate the profit automatically when selectedItem or duration changes
  useEffect(() => {
    if (selectedItem) {
      const baseProfit = profitPerItem[selectedItem] * 1; // Assuming quantity is always 1 for now
      setProfit(baseProfit);
    }
  }, [selectedItem, duration]); // Recalculate whenever selectedItem or duration changes

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is small (mobile)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: "8px",
        margin: "auto",
        width: { xs: "100%", sm: "400px", md: "500px" }, // Adjust width for different screen sizes
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={0.5} sx={{ fontSize: { xs: "18px", sm: "20px" } }}>
        Profit Calculator
      </Typography>

      {/* Description */}
      <Typography sx={{ fontSize: { xs: "8px", sm: "10px" } }} mb={1}>
        Calculate the profit of any menu item for the selected duration.
      </Typography>

      {/* Search bar for selecting menu item and duration dropdown */}
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        mb={1}
        mt={1.5}
        flexDirection={isSmallScreen ? "column" : "row"} // Stack inputs on small screens
      >
        <Autocomplete
          value={selectedItem}
          onChange={(event, newValue) => setSelectedItem(newValue)}
          options={menuItems}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Menu"
              sx={{
                height: "30px",
                "& .MuiInputBase-root": { height: "30px" },
                "& .MuiOutlinedInput-root": { height: "30px" },
                fontSize: { xs: "10px", sm: "12px" }, // Adjust text size on small screens
                textAlign: "center",
              }}
            />
          )}
          sx={{ width: { xs: "100%", sm: "150px" } }} // Full-width on small screens, fixed width on larger screens
        />
        <Typography sx={{ fontSize: { xs: "8px", sm: "10px" } }}>for next</Typography>

        {/* Duration dropdown */}
        <FormControl sx={{ width: { xs: "100%", sm: "120px" } }}>
          <InputLabel sx={{ fontSize: { xs: "8px", sm: "10px" } }}>Duration</InputLabel>
          <Select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            label="Duration"
            sx={{
              height: "30px",
              width: "100%",
              fontSize: { xs: "10px", sm: "12px" }, // Adjust text size on small screens
            }}
          >
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Estimated Profit Text */}
      <Typography sx={{ fontSize: { xs: "10px", sm: "12px" } }} mb={1}>
        Estimated Profit you will earn by selling {selectedItem} next {duration}
      </Typography>

      {/* Display calculated profit */}
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "20px" }, // Adjust font size on small screens
        }}
        fontWeight="bold"
        mb={1}
        color="primary"
      >
        ₹ {profit ? profit.toFixed(2) : "0.00"}
      </Typography>

      {/* Apply discount and show final profit */}
      <Box display="flex" alignItems="center" gap={2}>
        <Typography sx={{ fontSize: { xs: "10px", sm: "12px" } }}>Apply discount of</Typography>

        {/* Discount dropdown */}
        <FormControl>
          <Select
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            label="Discount"
            sx={{
              height: "30px",
              width: { xs: "60%", sm: "80px" }, // Adjust width based on screen size
              fontSize: { xs: "10px", sm: "12px" }, // Adjust text size on small screens
            }}
          >
            <MenuItem value={5}>5%</MenuItem>
            <MenuItem value={10}>10%</MenuItem>
            <MenuItem value={15}>15%</MenuItem>
            <MenuItem value={20}>20%</MenuItem>
          </Select>
        </FormControl>

        <Typography sx={{ fontSize: { xs: "10px", sm: "12px" } }}>the profit will be</Typography>
      </Box>

      {/* Final Profit after discount */}
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "15px" }, // Adjust font size on small screens
        }}
        color="secondary"
        fontWeight="bold"
        mb={0}
      >
        ₹ {profit ? (profit * (1 - discount / 100)).toFixed(2) : "0.00"}
      </Typography>
    </Box>
  );
}

export default ProfitCalculator;
