import db from "../config/database.js";
import  { DataTypes} from "sequelize";

const User = db.define("user", {
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    gender:DataTypes.STRING,
},{
    frezeeTableName : true,
})

export default User;

(async() =>{
    await db.sync()
})