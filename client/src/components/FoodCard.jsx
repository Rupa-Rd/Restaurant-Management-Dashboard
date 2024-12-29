import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, useTheme } from '@mui/material';

function FoodCard({ image, name, rating }) {
  const theme = useTheme();

  return (
    <Box
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        width: "65px", 
        margin: 'auto',
        borderRadius: '8px', 
        boxShadow: "none", // Removes any shadow around the card
        backgroundColor: "transparent" // Ensures no background color
      }}
    >
      {/* Food Image */}
      <CardMedia
        component="img"
        height="50px" // Adjust height of the image as per your needs
        width="100px"
        image={image} // The image URL passed via props
        alt={name}
        sx={{ borderRadius: '8px 8px 8px 8px', border: '1px solid black'}} // Keeps rounded corners on top image
      />
      
      <CardContent sx={{ padding: '0', "&:last-child": { paddingBottom: "2px" }}}> {/* Adjust padding to avoid extra space */}
        {/* Food Name */}
        <Typography variant="body2" fontWeight="bold" noWrap textAlign={'center'}>
          {name}
        </Typography>
        
        {/* Food Rating */}
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          {rating}⭐
        </Typography>
      </CardContent>
    </Box>
  );
}

export default FoodCard;
