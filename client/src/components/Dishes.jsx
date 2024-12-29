import React from 'react'
import { Box } from '@mui/material'
import fries from "../assets/fries.jpg"
import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"
import dessert from "../assets/dessert.jpg"
import FoodCard from './FoodCard';

function Dishes() {
  return (
    <Box display="flex" gap="20px" flexWrap="wrap">

    <FoodCard
      image={pizza}
      name="Pizza"
      rating="4.5"
    />
    <FoodCard
      image={burger}
      name="Burger"
      rating="4.0"
    />
    <FoodCard
      image={fries}
      name="Fries"
      rating="3.8"
    />
    <FoodCard
      image={dessert}
      name="Dessert"
      rating="5.0"
    />
    {/* Add more FoodCards here */}
  </Box>
  )
}

export default Dishes