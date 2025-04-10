import db from "./config/database.js"
import Inventory from "./models/inventory.js"
import Product from "./models/product.js"
import User from "./models/user.js"

db.sync({
    alter : true
})
.then(() =>{
    console.log("Database Synced")
})
.catch((err) =>{
    console.log(err)
})
