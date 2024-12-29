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
  return (
    <Box
      sx={{
        padding: 3,
        // paddingBottom: 0,
        borderRadius: "8px",
        backgroundColor: theme.palette.background.alt,
        maxWidth: 500,
        margin: "auto",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={0.5}>
        Profit Calculator
      </Typography>
      {/* Description */}
      <Typography sx={{fontSize:"10px"}}>
        Calculate the profit of any menu item for selected duration.
      </Typography>

      {/* Search bar for selecting menu item and duration dropdown */}
      <Box display="flex" alignItems="center" gap={2} mb={1} mt={1.5} >
        <Autocomplete
          value={selectedItem}
          onChange={(event, newValue) => setSelectedItem(newValue)}
          options={menuItems}
          renderInput={(params) => (
            <TextField {...params} label="Search Menu"  sx={{ height: '30px', '& .MuiInputBase-root': { height: '30px' }, '& .MuiOutlinedInput-root': { height: '30px' }, fontSize:"10px", textAlign: 'center'}}/>
          )}
          sx={{ width: '150px'}}
        />
        <Typography  sx={{fontSize:"10px"}}>for next</Typography>

        {/* Duration dropdown */}
        <FormControl sx={{ width: 100 }}>
          <InputLabel  sx={{fontSize:"10px"}}>Duration</InputLabel>
          <Select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            label="Duration"
            sx={{ height: '30px', width: '100px'}}
          >
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Estimated Profit Text */}
      <Typography  sx={{fontSize:"10px"}} mb={1}>
        Estimated Profit you will earn by selling {selectedItem} next {duration}
      </Typography>

      {/* Display calculated profit */}
      <Typography sx={{fontSize:"20px"}} fontWeight="bold" mb={1} color="primary">
        ₹ {profit ? profit.toFixed(2) : "0.00"}
      </Typography>

      {/* Apply discount and show final profit */}
      <Box display="flex" alignItems="center" gap={2}>
        <Typography  sx={{fontSize:"10px"}}>Apply discount of</Typography>

        {/* Discount dropdown */}
        <FormControl>
          <Select
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            label="Discount"
            sx={{ height: '30px', width: '80px'}}
          >
            <MenuItem value={5}>5%</MenuItem>
            <MenuItem value={10}>10%</MenuItem>
            <MenuItem value={15}>15%</MenuItem>
            <MenuItem value={20}>20%</MenuItem>
          </Select>
        </FormControl>

        <Typography  sx={{fontSize:"10px"}}>the profit will be</Typography>
      </Box>

      {/* Final Profit after discount */}
      <Typography  sx={{fontSize:"15px"}} color="secondary" fontWeight="bold" mb={0}>
        ₹ {profit ? (profit * (1 - discount / 100)).toFixed(2) : "0.00"}
      </Typography>
    </Box>
  );
}

export default ProfitCalculator;
