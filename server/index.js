import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import generalRoutes from './routes/general.js';
import customerRoutes from './routes/client.js';
import orderRoutes from './routes/order.js';
import menuRoutes from './routes/menu.js';
import settingRoutes from './routes/setting.js';

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/* ROUTES */
app.use("/general", generalRoutes);
app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);
app.use("/menu", menuRoutes);
app.use("/setting", settingRoutes);