import React from 'react';
import { Box, Typography, Avatar, Rating, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { format } from 'date-fns'; // To format the date

function RatingCard({ profilePic, name, rating, date, review, source }) {
  const theme = useTheme();
  
  // Format the date using date-fns
  const formattedDate = format(new Date(date), 'EEE d MMM yy'); 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: theme.palette.primary.main,
        maxWidth: 500,
        margin: 'auto',
        mb:1.5,
      }}
    >
      {/* First Row: Profile Pic, Name, Rating and Date */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
        <Box display="flex" alignItems="center">
          {/* Profile Picture */}
          <Avatar alt={name} src={profilePic} sx={{ width: 40, height: 40, marginRight: 2 }} />
          
          {/* Name and Rating */}
          <Box>
            <Typography variant="body1" fontWeight="bold" noWrap>
              {name}
            </Typography>
            <Box display="flex" alignItems="center">
              {/* Star Rating */}
              <Rating
                value={rating}
                precision={0.5}
                readOnly
                icon={<StarIcon />}
                emptyIcon={<StarIcon sx={{ color: theme.palette.grey[300] }} />}
                sx={{ marginRight: 1 }}
              />
              <Typography variant="body2" color="text.secondary">{rating}</Typography>
            </Box>
          </Box>
        </Box>

        {/* Date */}
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
          {formattedDate}
        </Typography>
      </Box>

      {/* Review Text */}
      <Typography variant="body2" color="text.primary" mb={1}>
        {review}
      </Typography>

      {/* Source */}
      <Typography variant="body2" color="text.secondary" fontStyle="italic">
        Source: {source}
      </Typography>
    </Box>
  );
}

export default RatingCard;
