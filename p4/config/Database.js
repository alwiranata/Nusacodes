import {Sequelize } from "sequelize"
const db = new Sequelize("nusacodes_p4","root","",{
    host: 'localhost',
    dialect:'mysql'
})

export default db