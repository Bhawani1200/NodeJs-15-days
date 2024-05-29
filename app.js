import express from 'express';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import bodyParser from 'body-parser';
import connectDB from './database.js';
import logger from './middleware/logger.js';
import cookieParser from 'cookie-parser';
const app=express();
connectDB();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(logger)
app.use(cookieParser())
app.set('view engine','ejs')
const PORT=process.env.PORT||5000;
app.use("/api/products",productRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.listen(PORT,()=>{
    console.log(`The port is running on ${PORT}`)
})