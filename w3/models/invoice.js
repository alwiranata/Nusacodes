import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Invoice = db.define("Invoice",{
    email :{
        type : DataTypes.STRING,
        allowNull : false,
    },
    items :{
        type : DataTypes.TEXT,
        allowNull : false,
    }
},{
    freezeTableName : true,
    timestamps : false
})

export default Invoice