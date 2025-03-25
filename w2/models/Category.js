import db from '../config/Database.js'
import { DataTypes } from 'sequelize'

const Category = db.define('categories',{
    name: DataTypes.STRING
},{
    freezeTableName :true,
    timestamps : false
})

export default Category


