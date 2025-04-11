import express from 'express';
import { createInvoice , getInvoicesByEmail ,getInvoiceById } from '../controllers/invoice.js';
import { userOnly, verifyToken } from '../middleware/userMiddleware.js';
const invoice = express.Router()

invoice.post("/",verifyToken,userOnly, createInvoice)
invoice.get("/:email",verifyToken,userOnly, getInvoicesByEmail)
invoice.get("/:id", verifyToken, userOnly, getInvoiceById);


export default invoice