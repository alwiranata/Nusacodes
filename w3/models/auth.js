import db from "../config/database.js";
import { DataTypes } from "sequelize";

const User  = db.define("Users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name :{
        type:DataTypes.STRING,
        allowNull: false,
    },

    email :{
        type:DataTypes.STRING,
        allowNull:false,
    },

    password : {
        type:DataTypes.STRING,
        allowNull:false,
    },

    phone :{
        type:DataTypes.STRING,
        allowNull:false
    },

    role : {
        type :  DataTypes.ENUM("admin", "user"),
        allowNull : false,
    }
},{
    freezeTableName:true,
    timestamps:false
})

export default User