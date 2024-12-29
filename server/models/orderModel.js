import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name:{type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
});

const orderSchema = new mongoose.Schema(
    {
        items: {type: [itemSchema], required: true},
        totalAmount: {type: Number, required: true},
        customer: {type: String, required: true},
        date: {type: Date, required: true},
    },
    {timestamps: true}
);

const Order = mongoose.model('Order', orderSchema);

export default Order;