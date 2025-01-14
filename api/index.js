import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();

app.use(cors());

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("DB Connected successfully!!");
    })
    .catch((err) => {
        console.error("DB Connection failed:", err.message);
    });

app.listen(3000,() =>{
console.log('Server is running on port 3000!!!!'); 
}
)