import express from "express"
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product.js"
import { verifyToken ,adminOnly }  from "../middleware/adminMiddleware.js"  

const productRouter = express.Router()

productRouter.use(verifyToken)
productRouter.get("/",adminOnly, getAllProducts)
productRouter.get("/:id",adminOnly, getProductById)
productRouter.post("/",adminOnly, createProduct)
productRouter.put("/:id",adminOnly, updateProduct)
productRouter.delete("/:id",adminOnly, deleteProduct) 

export default productRouter