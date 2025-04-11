import express from 'express';
import { addToCart } from '../controllers/cart.js';
import { verifyToken } from '../middleware/userMiddleware.js';

const cart = express.Router()

cart.post("/",verifyToken,addToCart)

export default cart