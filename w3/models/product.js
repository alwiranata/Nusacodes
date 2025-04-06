import db from "../config/database.js"; 
import { DataTypes, INTEGER } from "sequelize";
import Inventory from "./inventory.js";

const Product = db.define("products",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:DataTypes.STRING,
    image : DataTypes.STRING,
    qty:DataTypes.INTEGER,
    price :DataTypes.INTEGER,
    description : DataTypes.INTEGER,
    inventory_id:DataTypes.INTEGER
},{
    freezeTableName :true,
    timestamps :false
})

Product.belongsTo(Inventory,{  foreignKey: "inventory_id" })

export default Product