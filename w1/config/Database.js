import {Sequelize} from "sequelize"

const db = new Sequelize("nusacodes_week1","root","" ,{
    host : "localhost",
    dialect : "mysql"
})

export default db