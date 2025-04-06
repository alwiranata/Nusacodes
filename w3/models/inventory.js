import db from '../config/database.js'
import { DataTypes } from 'sequelize'

const Inventory = db.define("inventories",{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey :true,
        autoIncrement : true,
    },
    name: DataTypes.STRING,
    
},{
    freezeTableName : true,
    timestamps : false
})

export default Inventory

