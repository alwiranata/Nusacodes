import express from "express"
import {
    getAllInventorys,
    getInventoryById,
    createInventory,
    updateInventory,
    deleteInventory
} from "../controllers/inventory.js"
import { verifyToken } from "../middleware/adminMiddleware.js"

const inventoryRouter = express.Router()

inventoryRouter.use(verifyToken)
inventoryRouter.get("/", getAllInventorys)
inventoryRouter.get("/:id", getInventoryById)
inventoryRouter.post("/", createInventory)
inventoryRouter.put("/:id", updateInventory)
inventoryRouter.delete("/:id", deleteInventory) 

export default inventoryRouter