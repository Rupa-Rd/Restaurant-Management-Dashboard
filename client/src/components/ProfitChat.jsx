import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
} from "@mui/material"; // Importing Material-UI components
import {
  profitData2021,
  profitData2022,
  profitData2023,
  profitData2024,
} from "../chartData";

function ProfitChat() {
  const [selectedYear, setSelectedYear] = useState("2021");

  const dataMap = {
    2021: profitData2021,
    2022: profitData2022,
    2023: profitData2023,
    2024: profitData2024,
  };

  const data = dataMap[selectedYear];
  const theme = useTheme(); // Accessing the theme

  // Custom Tooltip Component to display only the number
  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length > 0) {
      const value = payload[0].value; // Extract the value from the payload

      return (
        <Box
          sx={{
            padding: 1,
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.55rem",
            boxShadow: 2,
            color: theme.palette.text.primary, // Ensure the text is visible based on theme
          }}
        >
          <Typography variant="body1">{`₹ ${value.toLocaleString()}`}</Typography>
        </Box>
      );
    }
    return null;
  };

  // Function to calculate the total profit for the selected year
  const totalProfit = data.reduce((acc, item) => acc + item.profit_in_inr, 0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 3,
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem", // Dark background from theme
        color: theme.palette.text.primary, // Ensure text color matches the theme
        height: "200px", // Optional: Ensure the background color takes the full height
      }}
    >
      {/* Top row: Profit heading on the left, Dropdown on the right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {/* Left side: Profit */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" fontWeight="bold">
            Profit
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            ₹ {totalProfit.toLocaleString()}
          </Typography>
        </Box>

        {/* Right side: Year Dropdown */}
        <Box sx={{ width: 200}} height="5px">
          <FormControl fullWidth>
            <InputLabel id="year-select-label">Select Year</InputLabel>
            <Select
              labelId="year-select-label"
              value={selectedYear}
              label="Select Year"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {["2021", "2022", "2023", "2024"].map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Chart Component */}
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />

          {/* YAxis with the hide prop to remove the Y-axis values */}
          <YAxis hide />

          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="profit_in_inr"
            stroke="#8884d8"
            strokeWidth={4} // Make the line thicker
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ProfitChat;
