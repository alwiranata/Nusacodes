import express from 'express';
import { createInvoice , getInvoiceByEmail } from '../controllers/invoice.js';
import { verifyToken } from '../middleware/userMiddleware.js';
const invoice = express.Router()

invoice.post("/",verifyToken,createInvoice)
invoice.get("/",verifyToken,getInvoiceByEmail)

export default invoice