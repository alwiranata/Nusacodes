import express from 'express';
import cors from "cors"
import CategoryRouter from './routes/CategoryRouter.js';
import BookRouter from './routes/BookRouter.js';

const app = express()
app.use(cors())
app.use(express.json())
app.use("/category",CategoryRouter)
app.use("/book",BookRouter)

app.listen(3000, () =>{
    console.log("Server is Runnign on localhost:3000")
})