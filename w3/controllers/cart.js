import Cart from "../models/cart.js";

export const addToCart = async (req, res) =>{
    try {
        const {product_id , qty } = req.body;
        const email = req.user.email

        await Cart.create({
            email,
            product_id,
            qty,
        })
        res.status(201).json({
            msg : "Product Added to Cart Successfully" 
        })
    } catch (error) {
        console.log(error)
    }
}