import Invoice from "../models/invoice.js";
import Cart from "../models/cart.js";
import Product from "../models/product.js";
import { where } from "sequelize";

export const createInvoice = async(req,res) =>{
    try {
        const email = req.user.email
        const cartItems = await Cart.findAll({
            where : {email},
        })

        if(cartItems.length === 0){
            return res.status(400).json({
                msg :"No items in cart"
            })
        }

        const invoiceItems = []

        for (const item of cartItems){
            const product = await Product.findByPk(item.product_id);
            if(!product || product.qty < item.qty){
                return res.status(400).json({
                    msg :`Insufficient stock for ${product?.name}`
                })
            }

            product.qty -= item.qty
            await product.save()

            invoiceItems.push({
                product_id :item.product_id,
                quantity : item.qty,
                price : product.price
            })
        }

        const invoice  = await Invoice.create({
            email,
            items :JSON.stringify(invoiceItems)
        })

        await Cart.destroy({
            where : {email}
        })

        res.status(201).json({
            msg : "Invoice Created", invoice
        })

    } catch (error) {
        console.log(error)
    }
} 

export const getInvoiceByEmail = async (req,res)=>{
    try {
        const email = req.user.email
        const invoice = await Invoice.findAll({
            where : {email}
        })

        res.json(invoice)
    } catch (error) {
        console.log(error)
    }
}
