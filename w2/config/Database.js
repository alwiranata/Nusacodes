import {Sequelize} from "sequelize"

const db = new Sequelize("nusacodes_week2","root","",{
    host : "localhost",
    dialect : "mysql"
})

export default db