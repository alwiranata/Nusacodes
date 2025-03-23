import db from "../config/database.js";
import  { DataTypes} from "sequelize";

const Categorie = db.define("categories", {
    name:DataTypes.STRING,
},{
    frezeeTableName : true,
})

export default Categorie;

(async() =>{
    await db.sync()
})