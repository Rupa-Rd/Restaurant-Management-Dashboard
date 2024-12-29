import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
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
} from "@mui/material"; // Material UI components
import { popularTimeData } from "../chartData";

function PopularTimeChart() {
  const [selectedDay, setSelectedDay] = useState("2024-01-01");

  // Map the data for the selected day to be passed to the chart
  const selectedDayData = popularTimeData.find(
    (item) => item.day === selectedDay
  );
  const theme = useTheme(); // Accessing the theme

  // Custom Tooltip to display only the hour (time)
  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length > 0) {
      const { hour } = payload[0].payload; // Extract the hour from the data
      return (
        <Box
          sx={{
            padding: 1,
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.55rem",
            borderRadius: 1,
            boxShadow: 2,
            color: theme.palette.text.primary, // Ensure the text is visible based on theme
          }}
        >
          <Typography variant="body1">{hour}</Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 3,
        paddingLeft: 3,
        paddingRight: 3,
        paddingBottom: 0,
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
        color: theme.palette.text.primary, // Ensure text color matches the theme
        // height: "180px", // Optional: Ensure the background color takes the full height
      }}
    >
      {/* Title and Data for the Popular Time Chart */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Ensures title and dropdown are on the same line
          alignItems: "center", // Aligns title and dropdown vertically in the middle
          // marginBottom: 1, // Adds spacing between title/dropdown and chart
        }}
        
      >
        {/* Left side: Popular Time */}
        <Typography variant="h5" fontWeight="bold">
          Popular Time
        </Typography>

        {/* Right side: Dropdown to select the day */}
        
        <FormControl fullWidth sx={{ width: 200 }}>
          <InputLabel id="day-select-label">Select Day</InputLabel>
          <Select
            labelId="day-select-label"
            value={selectedDay}
            label="Select Day"
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            {popularTimeData.map((data) => (
              <MenuItem key={data.day} value={data.day}>
                {data.day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={selectedDayData.hours}>
          {/* Removed CartesianGrid to remove the dotted X-axis line */}
          <XAxis dataKey="hour" />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />{" "}
          {/* Custom tooltip to show hour */}
          <Bar
            dataKey="activity"
            fill="#8884d8"
            radius={[10, 10, 0, 0]} // Only top corners rounded
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default PopularTimeChart;
