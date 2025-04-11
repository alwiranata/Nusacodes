import express from 'express';
import { addToCart } from '../controllers/cart.js';
import { verifyToken,userOnly } from '../middleware/userMiddleware.js';

const cart = express.Router()

cart.post("/",verifyToken,userOnly,addToCart)

export default cart