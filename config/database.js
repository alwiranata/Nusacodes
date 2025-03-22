import {Sequelize} from "sequelize"

const db = new Sequelize("nusacodes", "root", "", {
    host :'localhost',
    dialect: 'mysql',
})

export default db