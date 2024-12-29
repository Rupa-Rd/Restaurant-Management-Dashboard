import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
  {
    dishname: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Main Course", "Side", "Dessert"], // Add category validation here
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    popularity: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", MenuSchema);

export default Menu;
