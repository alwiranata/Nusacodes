import { DataTypes } from "sequelize";
import db from "../config/database.js"
import Product from "./product.js";

const Cart = db.define("carts",{
    email :{
        type :DataTypes.STRING,
        allowNull :false
    },
    product_id :{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    qty :{
        type :DataTypes.INTEGER,
        allowNull : false
    }
    
},{
    freezeTableName : true,
    timestamps : false
})

Cart.belongsTo(Product, { foreignKey : "product_id"})

export default Cart