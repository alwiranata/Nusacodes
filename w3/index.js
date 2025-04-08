import express from 'express';
import cors from "cors"
import inventoryRouter from './routes/inventory.js';
import productRouter from './routes/product.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use("/inventory",inventoryRouter)
app.use("/product",productRouter)

app.listen(3000, () =>{
    console.log("Server is Runnign on localhost:3000")
})