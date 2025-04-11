import { json } from "sequelize";
import Cart from "../models/cart.js";
import Product from "../models/product.js";

export const addToCart = async (req, res) =>{
    try {
        const {product_id , qty } = req.body;
        const email = req.user.email
        const product = await Product.findByPk(product_id)
        const price = product.price

        if(!product) return res.status(401).json({
            msg : "Product Not Found"
        })

        if(qty > product.qty) return res.status(401).json({
            msg : "Product Out of Stock"
        })

        await Cart.create({
            email,
            product_id,
            qty,
            price 
        })

        res.status(201).json({
            msg : "Product Added to Cart Successfully" 
        })
    } catch (error) {
        console.log(error)
    }
}