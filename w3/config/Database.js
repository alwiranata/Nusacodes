import {Sequelize} from 'sequelize'

const db = new Sequelize(
    "nusacodes_week3",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

export default db