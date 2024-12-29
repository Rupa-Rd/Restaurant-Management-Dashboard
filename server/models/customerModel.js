import mongoose from "mongoose";

// Define the schema for the customer data
const customerSchema = new mongoose.Schema(
  {
    _id: {
      type: String, // String since it's an ObjectId-like string
      required: true,
    },
    name: {
      type: String, // Customer's name
      required: true,
    },
    orders: {
      type: [String], // Array of order IDs (strings)
      required: true,
    },
  },
  { timestamps: true }
);

// Create and export the model based on the schema
const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
