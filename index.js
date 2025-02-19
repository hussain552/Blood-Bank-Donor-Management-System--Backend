import express from 'express';
import dotenv from 'dotenv';
import connectDB from './MOdels/config/connectDB.js';
import authRoutes from './Routes/Auth.js';
import contactUsQueryRouter from './Routes/contactUsQuery.js';
import GetDonor from './Routes/GetDonorList.js'
import cors from "cors";
import postBloodRequest from "./Routes/PostBloodRequest.js"
import Getrequirer from "./Routes/GetRequirer.js"
import profile from "./Routes/getProfile.js"
dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:3000", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true // If you need to send cookies or authentication tokens
  }));

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', contactUsQueryRouter);
app.use('/api',postBloodRequest);
app.use('/api',GetDonor)
app.use('/api',Getrequirer)
app.use('/api',profile)
connectDB();



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
