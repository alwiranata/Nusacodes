import express from "express"
import {
    getAllInventorys,
    getInventoryById,
    createInventory,
    updateInventory,
    deleteInventory
} from "../controllers/inventory.js"
import { adminOnly, verifyToken  } from "../middleware/adminMiddleware.js"

const inventoryRouter = express.Router()

inventoryRouter.use(verifyToken)
inventoryRouter.get("/",adminOnly, getAllInventorys)
inventoryRouter.get("/:id",adminOnly, getInventoryById)
inventoryRouter.post("/",adminOnly, createInventory)
inventoryRouter.put("/:id",adminOnly, updateInventory)
inventoryRouter.delete("/:id",adminOnly, deleteInventory) 

export default inventoryRouter