import db from "./config/database.js"
import Inventory from "./models/inventory.js"
import Product from "./models/product.js"
import Invoice from "./models/invoice.js"
import Cart from "./models/cart.js"
import User from "./models/auth.js"

db.sync({
    alter : true
})
.then(() =>{
    console.log("Database Synced")
})
.catch((err) =>{
    console.log(err)
})
