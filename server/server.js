import express from "express";
import colors from 'colors'
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/db.js";
// import authRoutes from './routes/authRoutes.js'
// import userRoutes from './routes/userRoutes.js'
// import reportRoutes from './routes/reportRoutes.js'
// import taskRoutes from './routes/taskRoutes.js'

const app = express();

//cors middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET","POST", "PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(express.json())
connectDB()
const port =process.env.PORT;

// app.use('/api/auth', authRoutes)
// app.use('/api/users', userRoutes)
// app.use('/api/task', taskRoutes)
// app.use('/api/report', reportRoutes)
app.listen(port, ()=>{
    console.log(`Server is running: ${port}`.yellow.underline)
})