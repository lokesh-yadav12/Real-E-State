import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); // Middleware for parsing JSON

// Database connection
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("DB Connected successfully!!");
    })
    .catch((err) => {
        console.error("DB Connection failed:", err.message);
    });

// Routes
app.use('/api/user', userRouter);

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000!!!!');
});
