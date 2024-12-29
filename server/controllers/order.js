import Order from "../models/orderModel.js";
import Customer from "../models/customerModel.js";

export const getOrder = async (req, res) => {
  try {
    const order = await Order.find();

    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
