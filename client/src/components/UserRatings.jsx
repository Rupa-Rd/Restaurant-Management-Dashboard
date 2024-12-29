import React from "react";
import { Box } from "@mui/material";
import RatingCard from "./RatingCard";
import profilePic1 from "../assets/burger.jpg";
import profilePic2 from "../assets/dessert.jpg";
import profilePic3 from "../assets/fries.jpg";
import profilePic4 from "../assets/pizza.jpg";
function UserRatings() {
  return (
    <Box
      mt={1}
      sx={{
        maxHeight: "460px", // Set a fixed height for the container
        overflowY: "auto", // Enables vertical scrolling
        paddingRight: "10px", // Optional: Add padding to the right to prevent cutting off the scrollbar
      }}
    >
      <RatingCard
        profilePic={profilePic1}
        name="Tarun Yadav"
        rating={4.5}
        date="2019-07-06T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Google"
      />
      <RatingCard
        profilePic={profilePic2}
        name="Kenil D'souza"
        rating={3}
        date="2019-07-05T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Zomato"
      />
      <RatingCard
        profilePic={profilePic3}
        name="Ananya Kumar"
        rating={4}
        date="2019-07-05T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Swiggy"
      />
      <RatingCard
        profilePic={profilePic4}
        name="Vishwajeet Gaonkar"
        rating={2.5}
        date="2019-07-04T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Zomato"
      />
      <RatingCard
        profilePic={profilePic1}
        name="Anisha Kadam"
        rating={2}
        date="2019-07-01T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Swiggy"
      />
      <RatingCard
        profilePic={profilePic1}
        name="Tarun Yadav"
        rating={4.5}
        date="2019-07-06T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Google"
      />
      <RatingCard
        profilePic={profilePic2}
        name="Kenil D'souza"
        rating={3}
        date="2019-07-05T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Zomato"
      />
      <RatingCard
        profilePic={profilePic3}
        name="Ananya Kumar"
        rating={4}
        date="2019-07-05T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Swiggy"
      />
      <RatingCard
        profilePic={profilePic4}
        name="Vishwajeet Gaonkar"
        rating={2.5}
        date="2019-07-04T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Zomato"
      />
      <RatingCard
        profilePic={profilePic1}
        name="Anisha Kadam"
        rating={2}
        date="2019-07-01T00:00:00Z"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula."
        source="Swiggy"
      />
    </Box>
  );
}

export default UserRatings;
