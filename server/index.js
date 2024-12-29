import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import generalRoutes from "./routes/general.js";
import customerRoutes from "./routes/customer.js";
import orderRoutes from "./routes/order.js";
import menuRoutes from "./routes/menu.js";
import settingRoutes from "./routes/setting.js";

/* DATA IMPORTS*/
import User from "./models/User.js"
// import Customer from "./models/customerModel.js"
// import Order from "./models/orderModel.js"
// import Menu from "./models/menuModel.js"
import {
    userDetails,
    orderDetails,
    menuDetails,
}from "./data/index.js"

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/api/general", generalRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/setting", settingRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* CODE TO INSERT DATA INTO DB */
    // User.insertMany(userDetails);
  })
  .catch((error) => console.log(`${error} did not connect`));
