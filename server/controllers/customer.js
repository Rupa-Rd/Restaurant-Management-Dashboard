import Customer from "../models/customerModel.js";
import Order from "../models/orderModel.js";

// Fetch customer details along with their orders based on order ID
export const getCustomer = async (req, res) => {
  try {
    // Get the customer based on the provided ID or all customers if no ID is provided
    const customerId = req.params.customerId;

    if (!customerId) {
      // If no customer ID is provided, fetch all customers along with their orders
      const customers = await Customer.find().populate({
        path: "orders", // Assuming "orders" is the field in Customer schema that stores order references
        model: "Order", // Refers to the Order model
        select: "items totalAmount",
      });

      return res.status(200).json(customers);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
