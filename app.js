import express from 'express';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import bodyParser from 'body-parser';
import connectDB from './database.js';
const app=express();
connectDB();
app.use(bodyParser.json())
const PORT=process.env.PORT||5000;
app.use("/api/products",productRoutes)
app.use("/api/users",userRoutes)
app.listen(PORT,()=>{
    console.log(`The port is running on ${PORT}`)
})