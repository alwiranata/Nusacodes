import express from "express"
import {
    getAllInventorys,
    getInventoryById,
    createInventory,
    updateInventory,
    deleteInventory
} from "../controllers/inventory.js"

const inventoryRouter = express.Router()

inventoryRouter.get("/", getAllInventorys)
inventoryRouter.get("/:id", getInventoryById)
inventoryRouter.post("/", createInventory)
inventoryRouter.put("/:id", updateInventory)
inventoryRouter.delete("/:id", deleteInventory) 

export default inventoryRouter