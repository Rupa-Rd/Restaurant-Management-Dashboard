import Customer from "../models/customerModel.js";
import Order from "../models/orderModel.js";

export const getCustomer = async(req, res) =>{
    try{
        const customers = await Customer.find();

        res.status(200).json(customers);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};
