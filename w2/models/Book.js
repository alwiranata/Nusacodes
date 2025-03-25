import db from "../config/Database.js"
import {DataTypes} from "sequelize"
import Category from "./Category.js";

const Book = db.define("books",{
	name : DataTypes.STRING,
	category_id : DataTypes.INTEGER
	
},{
		freezeTableName: true,
		timestamps: false,
})

Book.belongsTo(Category, { foreignKey: "id" });

export default Book