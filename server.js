import path from "path";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// Connect to database
connectDB();

const app = express(); 


app.get('/', (req, res)   => {
res.send("this is a test data from server")
})

app.listen(process.env.PORT | 5000, ()=>{
    console.log('Server running on port');
}
  
 
);
